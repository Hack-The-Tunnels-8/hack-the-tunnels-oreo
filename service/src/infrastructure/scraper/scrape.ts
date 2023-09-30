import axios from 'axios';
import cheerio from 'cheerio';
import { ProductService } from "../../services";

(async() => {
    const res = await axios.get("https://www.amazon.ca/Torin-ATRJH-3430T-Plastic-Multi-Function-Dividers/dp/B08DVFLT5P?pd_rd_w=qJMsk&content-id=amzn1.sym.455d47f8-77ff-46ae-8198-52ca1f6b4b00&pf_rd_p=455d47f8-77ff-46ae-8198-52ca1f6b4b00&pf_rd_r=S1TBSH9ZJTKWZ1XM5KVN&pd_rd_wg=MgIO4&pd_rd_r=d1749ae3-abaa-4e1d-87df-a0f7f6c01c84&pd_rd_i=B08DVFLT5P&psc=1&ref_=pd_bap_d_grid_rp_0_1_ec_nped_i_");

    const html = res.data;

    const $ = cheerio.load(html);

    const title = $(`#productTitle`).text().trim();
    const image = $(`#landingImage`).attr().src;
    const price = $('#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center > span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay > span.a-offscreen').text().split('$')[1];
    const about = $('#feature-bullets > ul');

    var description = "";

    for (const info of about) {
        const text = $(info).text().trim();

        description += text;
    }

    const product = await ProductService.create(
        title,
        description,
        parseFloat(price),
        image,
    );

    console.log(product);
})();
const sendMail = require("./mailSender");
const Products = require('../db/models/products/Products');

const sendOrderMail = async (email, delivery_type, payment_type, delivery_info, all_price, order_no, product_item) => {
    let arrayOfBuyProductId = []
    product_item.map(obj => {
        arrayOfBuyProductId.push(obj['idOfProduct'])
    })

    await Products.find({_id:{$in:arrayOfBuyProductId}})
        .then(buyProducts => {
        const letterSubject = "eWorld Shop new order";
        const letterHtml = `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            
            <title>eworld-shop order letter</title>
            
            <style type="text/css">
                @media only screen and (min-device-width: 601px) {.content {width: 600px !important;}}
                body[yahoo] .class {}
                .button {text-align: center; font-size: 18px; font-family: sans-serif; font-weight: bold; padding: 0 30px 0 30px;}
                .button a {color: #ffffff!important; text-decoration: none;}
                .button a:hover {text-decoration: underline;}

                @media only screen and (max-width: 550px), screen and (max-device-width: 550px) {
                body[yahoo] .buttonwrapper {background-color: transparent!important;}
                body[yahoo] .button a {background-color: #e05443; padding: 15px 15px 13px!important; display: block!important;}
            </style>
        </head>
        <body yahoo bgcolor="#f6f8f1" style="margin: 0; padding: 0; min-width: 100%; background-color: #f6f8f1;">
        <!--[if (gte mso 9)|(IE)]>
        <table width="600" align="center" cellpadding="0" cellspacing="0" border="0">
        <tr> <td><![endif]-->
        <table class="content" align="center" cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width: 600px;">
                        <!--Header-->
                            <tr>                         
                                <td bgcolor="#ffffff" style="padding: 40px 30px 0px 30px;">
                                
                                <!--LOGO-->
                                <table width="95" align="left" border="0" cellpadding="0" cellspacing="0">
                                        <tr>
                                            <td height="70" style="padding: 0 20px 20px 0;">
                                    
                                    <!--ТУТ ССЫЛКА НА ЛОГО-->
                                                <img src="http://18.216.210.110:3006/img/eWorld-logo.png" width="100"  border="0" alt="" / >
                                            </td>
                                        </tr>
                                    </table><!--END-LOGO-->
                                    
                                    <!--Заглавие-->
                                    <!--[if (gte mso 9)|(IE)]>
                                    <table width="425" align="left" cellpadding="0" cellspacing="0" border="0">
                                        <tr>
                                            <td>
                                            <![endif]-->
            
                                    <table class="col425" align="left" border="0" cellpadding="0" style="width: 100%; max-width: 400px;">
                                        <tr>
                                            <td height="70">
                                                    <table width="100%" border="0" cellspacing="0">
                                                    <tr>
                                                        <td style="padding: 0 0 0 3px; font-size: 20px; color: #153643; font-family: sans-serif; letter-spacing: 5px; font-weight: bold;">
                                                        Your best
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="h1" style="padding: 5px 0 0 0; font-size: 33px; line-height: 38px; font-weight: bold; color: #153643; font-family: sans-serif;">
                                                            Electronic shop
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                <!--[if (gte mso 9)|(IE)]>
                                    </td>
                                </tr>
                                </table>
                                <![endif]--><!--END-ЗАГЛАВИЕ-->

                                </td>
                            </tr>

                        <!--ТЕЛО ПИСЬМА-->
                            <tr>
                                <td class="content" bgcolor="#ffffff" style="width: 100%; max-width: 600px; padding: 10px 30px 30px 30px; border-bottom: 1px solid #f2eeed;">
    
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td style="color: #153643; font-family: sans-serif; padding: 0 0 15px 0; font-size: 18px; line-height: 28px; font-weight: bold;">
                                                    Order №: ${order_no}
                                                    <p>Price: <span style="color:green;">${all_price}$</span></p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="color: #153643; font-family: sans-serif; font-size: 18px; line-height: 22px;" >
                                                    <p>Payment type: ${payment_type}</p>
                                                    <p>Delivery type: ${delivery_type}</p>
                                                    ${delivery_info.length > 0?`<p>Your detail:</p><span>${delivery_info}</span>`:" "}					
                                                </td>
                                            </tr>
                                            ${buyProducts.map(product => {
                                                const index = product_item.findIndex(obj => obj.idOfProduct == product._id)
                                                return(`<tr>
                                                    <td style="color: #153643; font-family: sans-serif; font-size: 20px; line-height: 22px; padding: 5px 0 5px 0;" >
                                                    <img src=${"http://18.216.210.110:3006/"+product.images[0]} width="120" height="60" border="0" alt=""/>
                                                    <span style="text-align:center;">${" x"+ product_item[index].count + " "}${product.model.replace(/[-_—]+/g, ' ') + " " + product.color}</span>					
                                                    </td>
                                                </tr>`)
                                            })}
                                            <!--ОКОНЧАНИЕ ПИСЬМА-->
                                            <tr>
                                            <td style="color: #153643; font-family: sans-serif; font-size: 16px; line-height: 22px;">
                                                <p>Best regards, <br />
                                                <strong>eWorld shop</strong></p>
                                            </td>
                                            </tr><!--/ОКОНЧАНИЕ ПИСЬМА-->
                                    </table>
                                </td>
                            </tr>	
                        
                        <!--Footer-->
                            <tr>
                            <td class="footer" bgcolor="#44525f" style="padding: 20px 30px 15px 30px;">
                        
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td align="center" style="font-family: sans-serif; font-size: 14px; color: #ffffff;">
                                                    &reg;All rights reserved<br/>
                                                    <a href="http://18.216.210.110:3006/" style="color: #ffffff; text-decoration: underline;">www.e-world-shop.com.ua</a>
                                                    </td>
                                            </tr>
                                        </table>
                    <!--[if (gte mso 9)|(IE)]>
            </td>
        </tr>
        </table>
        <![endif]-->
            </body>
        </html>`;

        sendMail(email, letterSubject, letterHtml);
    })
};

module.exports = {
    sendOrderMail
}
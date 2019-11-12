const Subscriber = require("../db/models/Subscriber");
const sendMail = require("../helpers/mailSender");

exports.subscriber = (req, res, next) => {
	const { email } = req.body;

	Subscriber.findOne({ email })
		.then(currentSubscriber => {
			if (currentSubscriber) {
				res.status(400).json({
					message: `Email '${currentSubscriber.email}' is already subscribed! Thanks!`,
					subscriber: currentSubscriber,
					isError: true
				});
			} else {
				const subscriber = new Subscriber({
					email
				});

        subscriber
          .save()
          .then(async data => {
            const letterSubject = "Welcom to eWorld Shop!";
            const letterHtml = `
			<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
			<html xmlns="http://www.w3.org/1999/xhtml>
				<head>
					<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />				
					<title>HTML LETTER</title>
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
													
													<!--ВСТУПЛЕНИЕ-->
													<tr>
														<td style="color: #153643; font-family: sans-serif; padding: 0 0 15px 0; font-size: 24px; line-height: 28px; font-weight: bold;">
														
															 Dear Customer  ! 
															 
														</td>
													</tr><!--/ВСТУПЛЕНИЕ-->
													
													
													<!--НАЧАЛО-->
													<tr>
														<td style="color: #153643; font-family: sans-serif; font-size: 16px; line-height: 22px;">
														   <p>Thank you for choosing our store, we will send you only current offers at the best prices.</p>
														   
														   <!--КНОПКА Button-->
														<table class="buttonwrapper" bgcolor="#34d264" border="0" cellspacing="0" cellpadding="0">
														  <tr>
															<td class="button" height="40" style="text-align: center; font-size: 12px; font-family: sans-serif; font-weight: bold; padding: 0 30px 0 30px;">
															
															 <!--ТЕКСТ И ССЫЛКА КНОПКИ-->
															  <a style="color: #ffffff; text-decoration: none;" href="http://18.216.210.110:3006/product-list">Our best products</a>
															</td>
														  </tr>
														</table><!--/Button-->					
																					  
														</td>
													</tr><!--/НАЧАЛО-->
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
			</html>
      `;
            const mailResult = await sendMail(email, letterSubject, letterHtml);
            res.send({
              message: "Congratulations! Now, you are subscribed!",
              subscriber: data,
              isError: false,
              isMailSent: true
            });
          })
          .catch(error =>
            res.status(400).json({
              message: `Error happened on server!`,
              isError: true,
              isMailSent: false,
              errorDetails: "We have an error. Please contact us."
            })
          );
      }
    })
    .catch(error =>
      res.status(400).json({
        message: "Error happened on server: ${error}",
        isError: true,
        isMailSent: false,
        errorDetails: "We have an error. Please contact us."
      })
    );
};

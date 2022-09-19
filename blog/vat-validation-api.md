---
slug: vat-number-check-api
title: Automate VAT number check through APIs
authors: [AakashJNair1]
tags: [lookupapp]
---

While working for a large fintech company building products, we noticed more and more companies wanting to shift from manually validating VAT numbers of their customers to automating this process via APIs. What exactly is driving this trend? <!--truncate-->


## Brief introduction into why VAT number check is important

As you sell your products or services globally it becomes important to categorise your customers into business customers ( B2B) or consumers ( B2C). The reason this is important is because whenever you issue an invoice, the right tax rates have to be applied on it. In case you are dealing with a consumer, you would have to collect taxes on their behalf and this means that the invoice should clearly specify the tax rates applied on the price of the Product or the service. On the other hand, if you are selling to a business, you might not need to collect these taxes at all. A classic example of this scenario is application of Reverse Charge during cross border trades in EU — for a B2B transaction, reverse charge is applied and hence no tax has to be recorded on the invoice. For B2C however, Reverse Charge does not come into the picture and hence taxes will be recorded on the invoice.

## Why are companies automating VAT number check?

The answer is pretty obvious. Scale. Every country has a different source to validate if the VAT number is valid or not. For example, VIES for the European Union ( EU ) and Northern Ireland, HMRC for the United Kingdom ( UK ), IRS for the United States and so on. 

You might have to either call up the relevant tax authority to get a confirmation or in some cases countries have dedicated websites that allow you to check if a VAT number is right or not. You can try this manual process to start off with but as the company grows, validating each VAT number manually is highly error prone. 2 things may happen:

- ***Identifying a business customer (B2B) as a consumer (B2C)*** <p>In this case, the invoice will contain tax rates and will lead to bad customer experience because the customer will have to reach out to you to correct this invoice. You would then have to cancel this invoice and generate a new one. A lot of time spent in communication and correcting the invoice.</p>


- ***Identifying a consumer (B2C) as a business customer (B2B)*** </p>In this case, you might not have applied any taxes on the invoice but since you are dealing with a consumer you are liable to collect taxes. When the audit happens you will have to pay the tax that was supposed to have been originally paid by the customer because the chances of retrieving it from the customer are minimal. But it doesn’t end there. You may also have to pay heavy penalties over this because of wrong declaration of taxes.</p>


This is why companies are choosing to automate VAT number check instead. You don’t have to worry about this operational aspect and you can focus on your product or services instead.

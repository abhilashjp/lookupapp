---
slug: vat-validation-api
title: Vat Validation API
authors: [AakashJNair1]
tags: [lookupapp]
---

While working for a large fintech company building products, we noticed more and more companies wanting to shift from manually validating VAT numbers of their customers to automating this process via APIs. What exactly is driving this trend? <!--truncate-->


#### Brief introduction into why VAT number validation is important

As you sell your products or services globally it becomes important to categorise your customers into business customers ( B2B) or consumers ( B2C). The reason this is important is because whenever you issue an invoice, the right tax rates have to be applied on it. In case you are dealing with a consumer, you would have to collect taxes on their behalf and this means that the invoice should clearly specify the tax rates applied on the price of the Product or the service. On the other hand, if you are selling to a business, you might not need to collect these taxes at all. A classic example of this scenario is application of Reverse Charge during cross border trades in EU — for a B2B transaction, reverse charge is applied and hence no tax has to be recorded on the invoice. For B2C however, Reverse Charge does not come into the picture and hence taxes will be recorded on the invoice.

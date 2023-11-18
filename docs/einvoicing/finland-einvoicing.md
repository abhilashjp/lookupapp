---
id: finvoice-einvoicing-finland
title: Finvoice - E-invoicing in Finland
keywords: [Finvoice invoicing, Finvoice format, Finvoice e-invoicing,Finnish e-invoicing standards, Finvoice 3.0, Finvoice XML, Finvoice validation,Finvoice integration, Finvoice electronic invoicing, Finvoice implementation in Finland, Finnish e-invoicing standards, E-invoicing in Finland]
sidebar_label: Finland - Finvoice
description: Discover the World of Finvoice and E-invoicing in Finland | Stay compliant with Finnish e-invoicing standards and explore the benefits of Finvoice format. Learn about the implementation process, XML integration, and regulations for e-invoicing in Finland. Find top service providers and understand the advantages of switching from paper to electronic invoices. Stay ahead in the digital age of invoicing in Finland with our comprehensive guide.
tags:
  - Finland
  - Einvoicing
---

<table  >
    <tr>
      <td align="left"><b>Country</b></td>
        <td align="left">Finland</td>
    </tr>
    <tr>
        <td align="Left">Status - B2G</td>
        <td align="left">Mandatory</td>
    </tr>
  <tr>
        <td align="Left">Status - B2B</td>
        <td align="left">Mandatory</td>
    </tr>
  <tr>
        <td align="Left">Status - B2C</td>
        <td align="left">NA</td>
    </tr>
  <tr>
        <td align="left">Formats</td>
        <td align="left">Finvoice 3.0 and TEAPPSXML 3.0.</td>
    </tr>
  <tr>
        <td align="left">Authority</td>
        <td align="left"></td>
    </tr>
  <tr>
        <td align="left">Network name</td>
        <td align="left">Finvoice and Tieke </td>
 </tr>
  <tr>
        <td align="left">Legislation</td>
        <td align="left"><a href="https://www.finlex.fi/fi/laki/alkup/2019/20190241">Finnish Einvoicing Act 241/2019</a></td>
 </tr>
</table>

E-Invoicing refers to the digital exchange of invoice information between buyers' and suppliers' software systems. Finland has adopted a standard framework called Finvoice to enable nationwide einvoicing. Finvoice is based on the international Peppol framework but contains customizations for the Finnish market. 

## What is Finvoice?

Finvoice is a set of technical specifications and infrastructure that allows the digital sending, receiving and processing of invoices and other business documents between companies. It was originally developed in Finland starting from 2003.

The Finvoice specifications define common data formats, structures and rules to enable interoperability between organizations' financial systems. Finvoice messages contain invoice details formatted in a standardized XML structure. 

A key part of Finvoice is the network infrastructure that connects senders and receivers of einvoice messages. The banks in Finland jointly provide connectivity to the Finvoice network for their business customers through accredited service providers.

Once connected through a bank, companies can exchange invoices digitally with any other organization on the Finvoice network regardless of the accounting software being used.

Finvoice standards are maintained by Finance Finland, an industry body representing banks and financial sector companies in Finland. The latest version is Finvoice 3.0 which was updated to comply with European einvoicing standards.

## Finvoice Adoption in Finland

The use of Finvoice has steadily grown since its introduction. By 2022, Finvoice was used to send over 300 million business-to-business invoices annually in Finland, representing 85% of invoices exchanged between companies.

All major ERP and accounting software packages in Finland have incorporated Finvoice capabilities. Banks have worked closely with software vendors to drive adoption.

Large buyer organizations in both the private and public sector have also created momentum by requiring their supplier networks to implement Finvoice. Significant users include retail chains, educational institutions, utility companies and government agencies.

In the public sector, the Finnish government mandated Finvoice for all state agencies from 2020. Additionally, many municipalities and cities use Finvoice when transacting with suppliers.

For small businesses, banks have provided free web portal solutions to send and receive einvoices without requiring accounting software. However, the majority of SMEs ultimately adopt Finvoice directly through their business management systems.

## How Finvoice EInvoicing Works

The Finvoice einvoicing process involves the following key steps:

1. The supplier's accounting or ERP system generates an invoice with the contents formatted according to the Finvoice XML structure and rules.
2. The einvoice message is sent via the supplier's bank connection to the Finvoice network infrastructure. Banks offer this connectivity through accredited Finvoice service providers.
3. The buyer's bank receives the einvoice from the supplier's bank via the Finvoice network and delivers it to the buyer's financial system. 
4. The buyer's accounting or ERP system automatically ingests the einvoice data for processing and payment. This removes manual data entry or scanning.
5. The buyer can then manage the einvoice using its normal workflows, approvals, reconciliations etc. 
6. The buyer's system generates a payment message which gets sent back to their bank and via Finvoice to the supplier's bank. This automates payment reconciliation.

The exchange of both einvoice and payment data between banks happens seamlessly via the Finvoice network. Companies connect once then can digitally transact with all other participants.

The banks handle the information exchange securely between the two counterparties based on their business identifiers. Companies receive a delivery confirmation when an invoice is successfully received by the buyer's bank.

<table align="center" border="1px" border-color="#dedede"><tr><td>
  <img src="/docs/img/finvoice-wrokflow.PNG" alt="Finvoice end to end workflow"/>
  </td></tr>
  <tr><td align="center">Finvoice end to end workflow</td></tr>
</table>

1. Invoicer sends an Invoicer Notification, which states that the Invoicer provides e-invoice and direct payment as invoicing formats.
2. Consumer customer makes a direct payment order with their service provider, who then forms a Reception Notification to the Invoicer on the basis of the direct payment order.
3. The Reception Notification is forwarded to the Invoicer, and contains the information that the customer wants to use direct payment.
4. The Invoicer sends the invoice to the consumer customer in the agreed manner.
5. The Invoicer sends an electronic copy of the invoice in the Finvoice format.
6. The payer’s service provider effects the credit transfer on the basis of the invoice copy and payment order on the due date.

## Finvoice Service Providers

Banks rely on specialized service providers to operate the technical infrastructure connecting business customers to the Finvoice network. These Finvoice service providers are accredited by Finance Finland to ensure compliance with all necessary standards and requirements.

Service providers integrate the customer's financial systems with their own access point software to exchange documents with Finvoice network. This is achieved through standard interfaces like APIs. They translate data formats and manage the secure data transfer.

Larger ERP vendors often provide their own access point capabilities natively integrated within their software products. But most businesses rely on third-party service providers selected in agreement with their bank.

Some service providers additionally offer value-added services on top of basic Finvoice connectivity. These include digitization of paper invoices, einvoicing analytics, supply chain onboarding and managing Finvoice integration for accounting firms on behalf of their SME clients.

## Finvoice Messages

The Finvoice specification supports the exchange of various business documents in addition to regular invoices. These include:

- Credit and debit notes 
- Payment reminders
- Order confirmations
- Shipping notices
- Price lists 

Service providers are required to support a core set of Finvoice documents but can also handle custom document types if agreed with trading partners.

Documents exchanged via Finvoice contain both human readable information as well as structured data for automated processing. For example, an invoice includes:

- Sender and receiver business identities
- Invoice number 
- Date
- Payment terms
- Line items with amounts 
- VAT details
- Bank account details
- Reference numbers 

Finvoice allows inclusion of additional supporting information such as order identifiers, buyer purchase order numbers and delivery details for reconciliation purposes. 

The structured data enables the automatic posting of invoice information directly into the recipient's financial system. This removes the need for manual re-keying which improves efficiency while reducing errors.

## Finvoice Relation to Peppol

While Finvoice is used domestically in Finland, Peppol provides a standard for cross-border einvoicing within Europe and internationally. Finvoice builds on the Peppol specifications but with local customizations and extensions.

At a technical level, Finvoice and Peppol have some key differences:

- Finvoice uses a slightly different SOAP envelope structure to transport messages. Peppol is fully aligned with ebMS 3.0 while Finvoice has some deviations.
- Finvoice specifies Finnish-specific extensions like support for national reference number formats. Peppol invoices can be adapted for Finland but additional validation is needed.
- Finvoice has its own set of message types and code lists while Peppol uses UNCL collections. Finvoice has specifications for certain industry documents that don't exist in Peppol.
- Finvoice allows free-text references while Peppol requires structured references based on ISO 11649.

However, both Peppol and Finvoice enable the same automated sending, receipt and processing of einvoices. A key difference is Peppol's focus on interoperability across borders and between various international einvoicing formats.

Finvoice is only used for domestic einvoicing within Finland. However, Finnish organizations can exchange invoices internationally using Peppol and translate between the two standards. All major service providers in Finland support both Finvoice and Peppol connectivity.

## Finvoice Adoption Requirements

Adopting Finvoice-based einvoicing requires certain commitments and changes by both suppliers and buyers in a trading relationship.

Suppliers have to:

- Acquire accounting software that supports automated generation of Finvoice XML invoices if not already in place. Web service options also exist for smaller businesses.
- Connect to an accredited Finvoice service provider via their bank to have the infrastructure to send and receive einvoice messages with any party on the network.
- Make process changes such as removing paper invoices and enabling Finvoice in their systems.
- Onboard buyers onto Finvoice by providing information and getting agreement.

Buyers have to:

- Have financial systems capable of automatically ingesting and processing Finvoice einvoice data, including validation and workflow integration.

- Connect to a Finvoice service provider to exchange messages securely with suppliers.

- Adjust processes and workflows around einvoice receipt, review and approval prior to payment.

- Provide suppliers with necessary identifiers and agree to adopt Finvoice for that relationship.

The service providers and banks provide technical documentation and guides to assist their business customers with the implementation steps. But adopting Finvoice requires changes to processes, systems and business relationships for success.

## Consumer EInvoicing in Finland

Finvoice is also used to deliver invoices digitally to consumers, referred to as 'consumer einvoicing'. Companies can send einvoices directly into their customer's online bank account rather than mailing paper invoices.

Consumers first need to sign up for einvoicing in their bank. After that:

- The invoicing company sends a 'sender information' message to inform the consumer's bank that they will start sending einvoices.
- The bank makes this einvoicing option visible to the consumer in internet banking.
- The consumer approves the request and activates einvoicing for that sender. Their online banking address gets shared with the invoicing company electronically.
- The company starts sending Finvoice einvoices to the consumer using their online banking address. The invoices appear in the consumer's bank account to view or pay.

In addition to regular invoices, Finvoice supports additional message types relevant to consumer billing such as payment reminders, credit notes and direct debit notifications.

Consumers can approve invoices for automatic payment on due date or pay them manually. Regardless of payment method, the consumer retains control over every invoice before payment.

From the company perspective, implementing consumer einvoicing via Finvoice requires integration with their bank to be able to exchange the necessary digital messages.

## Benefits of Adopting Finvoice

The key benefits that companies aim to achieve by adopting Finvoice einvoicing include:

- Cost savings from faster invoice processing, reduced paper and postage and less manual work 
- Improved cashflow with structured einvoices paid faster electronically
- Fewer payment delays or errors by eliminating manual handling
- Better compliance with procurement requirements from buyers to use Finvoice
- More automated reconciliation of invoices, orders and payments via structured data
- Platform to add further digitalization such as eprocurement and touchless purchase-to-pay

However, realizing these benefits requires upfront work to implement Finvoice capabilities and transition trading partners. Ongoing change management is also needed as processes adapt to einvoicing.

## Finvoice Future Developments 

Finance Finland continues to maintain and evolve the Finvoice standard. Planned or potential areas for future development include:

- Support for additional document types such as contracts and procurement information.
- Broader standardized integration with procurement, inventory and payment processes.
- Enhanced structured data for compliance, analytics and reporting.
- Native Finvoice capabilities on more software platforms.
- Increased user-friendly automation of handshake processes for onboarding and exchanging information. 
- Integration of einvoicing with other technologies like blockchain, artificial intelligence and advanced analytics.

Finvoice provides a digital foundation for Finnish businesses and government entities to exchange invoices and information electronically. Its adoption is transitioning business-to-business invoicing from manual paper-based processes to automated digital workflows.

Ongoing development of the Finvoice standard and infrastructure will support further enhancement and innovation in business transactions and interactions.

## Important websites
* [Official Finvoice website ](https://www.finanssiala.fi/en/topics/finvoice-standard/)
* [Finnish EInvoicing Act 241/2019 ](https://www.finlex.fi/fi/laki/alkup/2019/20190241)

## Reference Links
* [Finvoice implementation guide](https://file.finanssiala.fi/finvoice/Finvoice_3_0_implementation_guidelines.pdf)

---
id: Zatca-fatoora-Saudi-Arabia-einvoicing-zakat-tax-and-customs-authority
title: ZATCA in Saudi Arabia - A Complete Guide
keywords: [ZATCA in Saudi Arabia, Einvoicing regulations in Saudi Arabia, ZATCA updates in Saudi Arabia, Tax compliance in Saudi Arabia, ZATCA status in Saudi Arabia,Einvoicing implications in Saudi Arabia, Saudi Arabian tax regulations, ZATCA compliance requirements, Saudi Arabian e-invoicing landscape,ZATCA implementation in Saudi Arabia]
sidebar_label: Zatca - Saudi Arabia
description: Stay up-to-date with the latest Einvoicing regulations, status, and updates on ZATCA in Saudi Arabia. Understand the implications of ZATCA and how it affects tax compliance. This comprehensive article provides expert insights into the e-invoicing landscape in Saudi Arabia under ZATCA. Get the information you need to ensure compliance and navigate the evolving tax regulations.
published: false
tags:
  - Zatca
  - Einvoicing Network
  - Saudi Arabia
  - KSA
  - Fatoora
---

<table  >
    <tr>
      <td align="left"><b>Country</b></td>
        <td align="left">Kingdom of Saudi Arabia</td>
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
        <td align="left">Mandatory</td>
    </tr>
  <tr>
        <td align="Left">Status - Non residents</td>
        <td align="left">Not Applicable</td>
    </tr>
  <tr>
        <td align="left">Formats</td>
        <td align="left">QR code on PDF </td>
    </tr>
  <tr>
        <td align="left">Authority</td>
        <td align="left">ZATCA</td>
    </tr>
  <tr>
        <td align="left">Network name</td>
        <td align="left">Digital Zakat(FATOORA)</td>
 </tr>
  <tr>
        <td align="left">Legislation</td>
        <td align="left">E-invoicing regulations, published on Friday December 4th 2020</td>
 </tr>
</table>

## Overview
The Zakat, Tax and Customs Authority is responsible for the implementation of Einvoicing in the Kingdom of Saudi Arabia. The regulations governing E-Invoicing in KSA were issued by the Board of Directors of the Zakat on December 4, 2020. The implementation included 2 phases
Phase 1 known as 'Generation Phase', started from 4th December 2021 and phase 2 known as 'Integration Phase' started from 1st January 2023.
Einvoicing is usually referred to as FATOORA in KSA. 

In phase 2, the relevant businesses must integrate their systems with the Tax Authority's system in order to obtain a clearance for Tax Invoices (including the corresponding debit and credit notes) and report the transactions for which Simplified Tax Invoices (including the corresponding debit and credit notes) have been issued.

Tax Invoices must be submitted in XML format (not PDF/A-3) to FATOORA Platform for“ Clearance ”using APIs. FATOORA Platform will validate whether the Tax Invoice is compliant with XML Implementation Standard and run additional referential checks. Once the Tax Invoice pass validation checks, FATOORA Platform will “Clear ”the Tax Invoice by including a Cryptographic Stamp and a QR Code to the XML. The “Cleared ”XML will be sent back to the taxpayer using API.

The taxpayers have an option to generate Simplified Tax Invoices for the B2B transactions if the value of Taxable Supplies is less than 1,000 SAR. It must be noted that for Simplified Invoices for B2C transaction can be generated for any value (even for transactions where
value of Taxable Supplies exceed 1,000 SAR). This limit of 1,000 SAR is only applicable when the supplier chooses to issue Simplified Tax Invoice for B2B transactions.

## Who need to generate einvoice in KSA ?
Phase 2 implementation is in groups. The first group is same as the first group selected for phase 1. All resident businesses who are registered for VAT in Saudi Arabia whose revenues exceed 3 billion riyals for the calendar year 2021 forms this group and are required to implement Phase 2 of e-invoicing between 1 January 2023 to 30 June 2023. The details of the subsequent groups will be announces 6 months in advance before the specific date of linkage with the Tax Authority's system. 

## Applicable Transactions
To comply with regulations, you are obligated to generate e-invoices for domestic sales, exports originating from KSA to other nations, and transactions involving prepayments for goods and services. However, e-invoices are not mandatory for transactions exempt from VAT and their associated payments, imports entering KSA, or supplies subject to the reverse charge mechanism.

## Formats

### Standard e-invoice Or Tax Invoice
![Tax Invoice](/img/KSA-tax-invoice-example-fatoora-saudi-arabia.png)

Standard E-Invoices are generally issued in Business to Business (B2B) transactions.A Tax Invoice as per Article 53(1) of VAT Implementing Regulations that is generated and stored in a structured electronic format through electronic means. The format is XML or PDF/A-3 format with embedded XML. Note that a paper invoice that is scanned or its photo is not considered an e-invoice.

### Simplified e-invoice
![Simplified Tax invoice](/img/KSA-simplified-tax-invoice-fatoora-saudi-arabia.png)

A Simplified Tax Invoice as per Article 53(7) of VAT Implementing Regulations that is generated and stored in a structured electronic format generally issued for a B2C (business to consumer) transaction and does not generally include the buyer’s details1. Optionally, Simplified Tax Invoices may also be issued for business-to-business transactions in case the value of supply is below SAR1000. Persons subject to the E-Invoicing Regulation will be required to transmit all Simplified Tax Invoices to the FATOORA Portal within (24) hours from its issuance. Once the Simplified Tax Invoice passvalidation checks, FATOORA Platform will provide an API response.

Simplified Tax Invoices must be generated in XML format or a PDF/A-3 (with embedded XML). Taxpayer’s einvoice generation solution must stamp the XML using CSID issued by ZATCA and also include a QR Code which is compliant with Phase 2 requirements (9 tags in TLV base64 format).

## Types of Einvoices

### Standard e-invoice process
![Standard e-invoice process](/img/standard-tax-einvoices-process.png)

### Simplified e-invoice process
![Simplified einvoice](/img/simplified-einvoice-process.png)

### Debit Note
Debit notes are issued by the sellers in order to issue a correction in value to buyers. Debit notes are used for increasing the value of the original invoice or the VAT amount. Debit notes follow the same format as the invoice for which they have been issued.

### Credit Note
Credit notes are issued by the sellers in order to refund buyers and are used to correct invoices information if generated with an error. Credit notes follow the same format as the invoice they have been issued upon.

## QR code components
The following information should be present in the QR code
* Seller’s name
* VAT registration number of the seller
* Date and time of invoice/note
* VAT amount
* Total amount (with VAT) of invoice/note

## Editing Einvoices
Eivoices generated cannot be edited. Nonetheless, it is possible to generate electronic invoices for VAT-compliant debit and credit notes, using on ZATCA's platform. These notes should be linked to the initial invoice that was originally issued. Suppose, for example, that a buyer returns a product and you are unable to modify the original invoice. In such cases, you can generate a credit note on the e-invoicing system . It is important to note that all invoicing and note issuance activities must be conducted through the same e-invoicing system and adhere to ZATCA's regulations. This approach establishes a standardized process for transactions, ensuring uniformity and secure storage of information.

## Things to Note

* The e-invoicing requirements will be applicable to all taxable goods and services, regardless of whether they are subject to standard or zero-rated VAT.
* E-invoicing is mandatory for all transactions involving business-to-business (B2B), business-to-government (B2G), and business-to-consumer (B2C) interactions. When issuing an e-invoice to a buyer, it is necessary to provide a printed copy as well.
* The invoices must be in Arabic. While it is possible to translate or include additional languages, issuing the e-invoice in Arabic is a mandatory requirement.
* All business owners registered for VAT within KSA, with the exception of non-resident taxable individuals, are required to adopt the e-invoicing process for both domestic and international sales. Additionally, if you act as a third party in KSA and issue tax invoices on behalf of a taxable person, you must also comply with the e-invoicing regulations.

<!--

-->
## Latest updates 
:::note Latest updates on FATOORA)
* `28-Apr-2023` **Criteria for selecting the taxpayers in Wave 4 for implementing phase 2** 
  *  The Fourth wave include all taxpayers whose revenues subject to VAT exceeded 150 Million Saudi Riyals during 2021 or 2022. VAT registered taxpayers meeting the criteria should integrate their e-invoicing solutions with (FATOORA) Platform starting from November 1, 2023.
[Learn More](https://zatca.gov.sa/en/MediaCenter/News/Pages/news_1039.aspx)

* `24-Mar-2023` **Criteria for selecting the taxpayers in Wave 3 for implementing phase 2** 
  * The Third wave include all taxpayers whose revenues subject to VAT exceeded 250 Million Saudi Riyals during 2021 or 2022. VAT registered taxpayers meeting the criteria should integrate their e-invoicing solutions with (FATOORA) Platform starting from October 1, 2023.
[Learn More](https://zatca.gov.sa/en/MediaCenter/News/Pages/news_1023.aspx)

* `23-Dec-2022` **Criteria for selecting the taxpayers in Wave 2 for implementing phase 2** 
  * The second wave include all taxpayers whose revenues subject to VAT exceeded (half a billion Saudi riyals) during 2021. VAT registered taxpayers meeting the criteria should integrated their E-invoicing solutions with (FATOORA) Platform starting from July 1, 2023.
[Learn More](https://zatca.gov.sa/en/MediaCenter/News/Pages/News_987.aspx) 

:::

## Glossary

### Clearance
Clearance involves the Authority verifying that the Electronic Tax Invoices and their associated Electronic Notes, submitted by individuals or entities, meet the specified controls and requirements. The Authority will apply a Cryptographic Stamp only to the Invoices and Notes that satisfy these controls and requirements. It's important to note that the Clearance process does not apply to Simplified Tax Invoices.

### Invoice Reference Number
The E-Invoice Solution assigns a distinct and consecutive number to each issued invoice, as mandated by article 53 of the VAT Implementing Regulations. The regulations, however, do not prescribe a particular format for the Invoice Reference Number. As a result, the reference numbers can vary, such as having a separate sequential reference number for each branch, as long as the Tax Invoice is clearly defined and follows a logical sequence.

### Cryptographic Stamp
A cryptographic electronic stamp is generated using algorithms to guarantee the authenticity of the source and the integrity of the content of data for Electronic Invoices and their associated Electronic Notes. It also verifies the identity of the issuer for the Invoices and Notes, ensuring adherence to the provisions and controls outlined in the VAT Law and its Implementing Regulation concerning the generation of Electronic Invoices and Notes.

### Cryptographic Stamp Identifier(CSID)
The Cryptographic Stamp Identifier (CSID) serves as a distinct identifier that establishes a connection between the E-Invoice Solution Unit and a reliable third party capable of verifying the identity of the individual or entity subject to the E-Invoicing Regulation.

### UUID
A 128-bit identifier, produced through an algorithm specifically designed to minimize the chances of generating the same identifier by any other entity in the known universe using the same algorithm. The UUID (Universally Unique Identifier) is created by an E-Invoice Solution that complies with the required standards, and it is embedded within the XML invoice. It is worth noting that in Windows operating systems, UUIDs are commonly referred to as GUIDs (Globally Unique Identifiers).

### Hash
A hash function is a type of function that can be utilized to convert data of any size into fixed-size values known as hashes, which occupy minimal space. The process of hashing is deterministic, which implies that it consistently generates the same hash value for a specific input value. It is impossible to reverse-engineer the original data from a hash, highlighting that the purpose of hashing is to ensure the integrity of a file or data by verifying that it has not been modified

## Important Links
* [Roll out Phases](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx)
* [E-invoicing regulations- Arabic](https://zatca.gov.sa/ar/E-Invoicing/Introduction/LawsAndRegulations/Documents/E-invoicing_Reg_AR.pdf)
* [E-invoicing regulations- EN](https://zatca.gov.sa/en/E-Invoicing/Introduction/LawsAndRegulations/Documents/E-invoicing%20Regulation%20EN.pdf)

## Reference Links
* [Phase 2 Groups](https://zatca.gov.sa/ar/MediaCenter/News/Pages/News_912.aspx)
* [Phase 2 summary](https://www.ey.com/en_gl/tax-alerts/saudi-arabia-releases-final-e-invoicing-regulations-for-phase-2)
* [Official implementation guideline](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf)
* [Fatoora Portal User Guide](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/Fatoora_Portal_User_Manual_English.pdf)

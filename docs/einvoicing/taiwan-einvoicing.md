---
id: einvoicing-guidelines-taiwan
title: Implementing E-Invoicing in Taiwan - A Guide for Merchants 
keywords: [Taiwan, e-invoicing, pioneers, Europe, B2B, optional, clearance model, B2G, EU directive, electronic invoices, public authorities, suppliers, local authorities.]
sidebar_label: Taiwan
tags:
  - Taiwan
  - Einvoicing
---

<table  >
    <tr>
      <td align="left"><b>Country</b></td>
        <td align="left">Taiwan</td>
    </tr>
  <tr>
        <td align="left">Authority</td>
        <td align="left"></td>
    </tr>
  <tr>
        <td align="left">Network name</td>
        <td align="left"><a href="https://www.einvoice.nat.gov.tw/index">einvioce</a></td>
 </tr>
  <tr>
        <td align="left">Legislation</td>
        <td align="left"></td>
 </tr>
</table>

E-invoicing, or electronic invoicing, has become an important part of doing business in Taiwan. The Taiwanese government has mandated the use of e-invoicing for certain business transactions as part of its efforts to reduce tax fraud. 

For merchants operating in Taiwan or selling to Taiwanese customers, switching to e-invoicing introduces some changes to business workflows. However, with proper planning and preparation, the transition can go smoothly.

This guide explains e-invoicing in Taiwan from the merchant’s perspective, covering key terminology, invoice data requirements, transmission methods, workflow impacts, carrier consolidation, platform registration, required certificates, testing procedures, and more. Read on for a comprehensive overview of implementing e-invoicing in Taiwan as a merchant.

## Key Terminology

Here are some common terms used when discussing e-invoicing in Taiwan that merchants should know:

- E-Invoice Platform: The online system provided by the Taiwanese Ministry of Finance for e-invoice issuance and management. 

- API: Application Programming Interface. Allows software systems to communicate with each other through coded requests and responses. 

- EDI: Electronic Data Interchange. Standard structured digital message formats for business data exchange. 

- E-Invoice Carrier: Identifying number associated with each e-invoice transaction. Enables consumer invoice lookup.

- Carrier Consolidation: Linking multiple carrier types, such as email, mobile number, etc. to enable multipath consumer invoice lookup.  

- Business Certificate: An electronic certificate issued by a government-authorized certification authority in Taiwan required for e-invoice issuance.

Understanding these key terms will help merchants follow e-invoicing requirements and processes in Taiwan.

## E-Invoice Data Requirements

Taiwanese e-invoice regulations specify what data an e-invoice must contain, structured into separate XML elements and attributes. Here are some major required fields:

**Header Area**

- Invoice Type Code: "07" for electronic uniform invoices
- Invoice Number 
- Invoice Date
- Seller Information
  - Seller Name
  - Tax ID Number
- Buyer Information 
  - Buyer Name
  - Tax ID Number (if applicable)
  
**Details Area**  
- Date of Sale
- Product/Service Details
  - Description
  - Quantity
  - Unit Price
- Tax Amounts
  - Output Tax
  - Input Tax
- Total Amount

The e-invoice data is transmitted in a Textek Message Implementation Guideline (MIG) digital message formatted according to strict specifications. Merchants must ensure their invoices contain all mandatory elements formatted properly before transmission.

## Transmission Methods 

There are two main methods for merchants to transmit e-invoice data to the Platform:

1. Through an E-Invoice Integrator

Rather than connecting directly to the Platform, merchants can engage third-party business service providers known as E-Invoice Integrators to transmit invoices on their behalf.

Popular options among major accounting software vendors include eInvoice Express, iBiz, and TaxPort. These integrators consolidate client invoice data, convert it into MIG format, and upload it to the Platform through their own certified systems.

This simplifies the transmission process significantly for merchants. However, there are monthly service fees to consider.

2. Self-Build Transmission System

Merchants can choose to build and certify their own systems to transmit e-invoice data directly. Although more complex, this avoids paying monthly integrator fees.

There are two possible architectures:

- Web API: Develop to call the Platform’s Open API through https protocol

- AS2 Protocol: Use EDIINT-AS2 message transmission protocol

In both cases, merchants must obtain the required software certificates and complete testing before formal transmission begins.

The self-build option gives merchants full control over and visibility into data transmission at the cost of greater upfront and maintenance resources.

## Impacts on Workflow 

Implementing e-invoicing requires changes across daily operations, with the biggest impacts on the billing and reporting processes:  

### Billing Process Changes

- The invoice issuance step must be adapted to generate Textek MIG files according to the mandated format. 

- Establish procedures to ensure MIG generation is triggered correctly when invoices are ready, avoiding missed or duplicate transmissions.

- Quality checks must be added before transmission to validate invoice data accuracy, especially tax amounts.

- Adjust customer receipt/acknowledgment workflow to incorporate e-invoicing carrier return codes for confirmation tracking.

### Reporting Process Changes  

- Output reports must separate e-invoice and paper invoice data for filing Taiwanese tax returns.

- Add tax code input procedures for keying invoice data into accounting system to avoid calculation mismatches with paper tax returns.

- Expand analytics tracking to encompass e-invoicing KPIs like transmission failure rate, processing speed, carrier open rate, valid carrier ratio, etc.

Adapting billing and reporting procedures before the e-invoicing switchover is crucial to avoid business disruption.

### Carrier Consolidation Requirements

To optimize consumer invoice lookup and prize redemption, Taiwanese e-invoice regulations mandate:

1. Merchants must transmit at least one “carrier” with each e-invoice to the Platform.

2. If the consumer provided multiple carrier types, such as email and mobile number, merchants must consolidate and transmit these carriers together in the e-invoice message.

Consolidating available carriers into every invoice issuance allows consumers maximum flexibility to manage invoice receipt through their preferred channel.

The two most common carrier types are mobile numbers and email addresses, but LINE, Taiwan Pay, and convenience store member carriers are also options.

## Platform Registration

Before formally beginning e-invoice issuance, merchants must set up a certified transmission account on the Platform through the following steps:

1. Apply for Government Uniform Invoice Purchase Permit and Sales Permit Certificates  

These permits authorize and identify entities as valid uniform invoice issuers/users.  

For merchants not based in Taiwan, applications are submitted through a local Taiwan branch/office or tax agent.

2. Set Up Transmission Account on Platform

Log into the Platform with company Tax ID Number and PIN to create the transmission account. This will generate the User ID, password, and transmission code required for uploading.

3. Designate Admin Account 

Assign a contact email on the transmission account settings page to receive key Platform notifications. This email must be monitored closely during the initial implementation period as invoices may fail to transmit properly if input fields contain errors.

## Required Certificates 

E-invoice transactions rely on digital certificates for securely verifying user identities:

- Government Certificate Authority (GCA)/Financial Certificate Authority (FCA) Organization Certificate

All entities using the Platform must register for a valid organization certificate from the GCA/FCA by submitting an application through a local bank. 

The bank will verify company registration records before contacting the GCA/FCA to issue the activated certificate, typically within 1 week. 

- Government Uniform Invoice Switching Center User Certificate

This certificate specifically authorizes the named contact to execute uniform invoice transmissions through the Switching Center system. The application requires copies of the business registration certificate and national ID card of the responsible person.

## Testing Procedures

Before formally switching to e-invoice issuance, merchants must complete testing across 4 key areas:

1. Transmission Connection Test

Verify that invoice upload requests route properly from the merchant’s system through to the Platform without errors.

2. Transmission Data Test 

Uploading formatted test invoice data files to validate that all data processes correctly.

3. Transmission Load Test

Gradually increase simultaneous upload volume up to expected peak transaction count and monitor for any transmission bottlenecks.

4. Comprehensive Test

Bring together expected combinations of locations, personnel, and systems to simulate live operations. Maintain testing until all major processes, issues, and fixes have been vetted.

Fulfilling these testing requirements sufficiently prepares the technical integration while exposing potential gaps in operational readiness. Only after passing comprehensive testing may the merchant formally enable e-invoice issuance.  


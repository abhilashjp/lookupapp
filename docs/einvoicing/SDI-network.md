---
id: SDI-Einvoicing-Sistema-di-Interscambio
title: What is SDI (Sistema di Interscambio) - A Complete Guide
keywords: [Sistema di Interscambio,SDI Italy, SDI compliance, SDI electronic invoicing, SDI software, SDI invoice format, SDI benefits, SDI vs SdI, SDI invoice management, SDI solutions, SDI digital transformation, SDI requirements, SDI tax compliance, SDI invoice approval process, SDI digital signature, SDI for small businesses, SDI for freelancers, SDI API, SDI invoicing process, SDI data interchange, SDI VAT, SDI XML, SDI document management, SDI automated invoice processing, SDI interoperability, SDI security, SDI invoice transmission, SDI electronic billing, SDI regulatory compliance, SDI invoice archiving, SDI document exchange, SDI document flow, SDI invoicing software, SDI B2B, SDI invoice validation, SDI e-commerce, SDI accounting software, SDI invoicing system, SDI digital invoicing]
sidebar_label: SDI Network - Italy
description: Learn all about SDI (Sistema di Interscambio) in this comprehensive guide, including how it works and why it's important.
published: false
tags:
  - SDI
  - Einvoicing Network
  - Italy
  - Clearance model
---

<table  >
    <tr>
      <td align="left"><b>Country</b></td>
        <td align="left">Italy</td>
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
        <td align="left">Formats</td>
        <td align="left">FatturaPA</td>
    </tr>
  <tr>
        <td align="left">Authority</td>
        <td align="left">Agenzia delle Entrate</td>
    </tr>
  <tr>
        <td align="left">Network name</td>
        <td align="left">Sistema di Interscambio</td>
 </tr>
  <tr>
        <td align="left">Legislation</td>
        <td align="left">Regole tecniche relative alla gestione delle fatture di cui all’art. 3, comma 1, d.lgs. 148/2018</td>
 </tr>
</table>

## Overview
Einvoicing in Italy is governed by Agenzia delle Entrate(The Revenue Agency). The einvoicing network in itally called Sistema di Interscambio.
Businesses that are based or established in Italy must use electronic invoicing and digital signatures when issuing invoices to government departments in Italy. Businesses outside of italy can issue invoices in paper or electronic form. Italy einvoicing is one of the examples of a clearance model which means validation of the invoice by tax administration before sending it to the buyer.

## What is SDI?
Sistema di Interscambio (SDI) is the einvoicing system in Italy. The Exchange System has no administrative role and does not perform any task relating to archiving nor storing invoices.



## Formats

### FatturaPA
Electronic invoices are in xml format and Italy's national format is called FatturaPA. FatturaPA is the only type of electronic invoice that is accepted by Public Administrations.[^1] . The authenticity of origin and the integrity of the content are guaranteed by the person who issues the invoice by affixing a certified electronic signature or a digital signature. 

### Esterometro

Esterometro was a tax reporting scheme that was originally put into place in 2019 in Italy. As per this scheme the VAT registered businesses in Italy were required to report sales and purchase invoices to or from foreign businesses and non-established businesses to the Agenzia Entrate quarterly. 
Typical transactions on these invoices include intracommunity acquisitions, and imports and exports. This scheme was to cover those invoices that originally did not fall into the scope of the Sistema di Interscambio

The Esterometro tax reporting scheme in Italy was abloshed in July 2022. It was replaced entirely by SDI(Sistema di Interscambio) reporting. 

## How to Sign Up and Send E-Invoices on SDI

Businesses can either use SDI directly or make use of a service provider to send einvoices. The SDI then forwards the invoice to the recipient, who can view and download it through a secure web portal. The system also allows the Revenue Agency to verify the authenticity of the invoice and detect any irregularities or fraud. Sellers can look for the correct electorinic addresses(Codice) of the public administrations on the Indicepa website mentioned below. 


Businesses can make use of any of the following channels to send einvoices. 

* Certified Electronic Mail (PEC)(Posta elettronica certificata)
* Send via web
* SDICoop Service - Transmission (Portale Fatture & Corrispettivi)
* SDIFTP service

For using broadcast services other than the portal busineses need to use authentication certificates. The accepted signature formats for invoice files are CAdES-BES and XAdES-BES.

No prior registration is necessary if the elctronic invoices are send through a Certified Electronic Mail (PEC). For the rest of the channels a registration is required. 

The messages relating to the issued or transmitted file can be viewed directly by the transmitter or by the issuer (or his/her delegate/person in charge) using their Entratel or Fisconline credentials on SDI via _Monitoraggio delle ricevute dei file trasmessi tool_ [here](https://ivaservizi.agenziaentrate.gov.it/portale/)

For those using SDI the invoices are stored and can be accessed in the authenticated area of the portal called "Fatture e Corrispettivi"

## Integration with Peppol 

In order send einvoices via the PEPPOL network to SDI and vice verce versa, the businesses needs to use a service provider that is both a Certified PEPPOL Access Point and a qualified intermediary towards the Revenue Agency’s SdI.


### Invoice transmission flow
![Invoice Transmission Flow](/img/SDI-peppol-invoice-transmission-flow.png)

1. The Economic Operator (Corner 1) sends the document to its own Access Point Provider (Corner 2), specifying the receiver as the Public Administration's UFE endpoint from iPA.
2. The Access Point Provider (Corner 2) uses PEPPOL's dynamic discovery to identify the Access Point (Corner 3) to which it must deliver the document for the PA.
3. The Access Point Provider of the Economic Operator (Corner 2) sends the document to the Access Point Provider of the Public Administration (Corner 3).
4. The Access Point of the Public Administration (Corner 3) sends the document to the Electronic Exchange System (SdI) using the traditional channels provided by SdI.
5. SdI verifies the compliance of the document with the Italian rules, translates it into the FatturaPA national format, and delivers it to the PA by attaching the original Peppol BIS 3 file, using the reception channels registered on SdI itself.

### Notification Flow

![Notification Flow](/img/Notification-flow.png)

1. The Public Administration (Corner 4) sends a notification of receipt to SdI in FatturaPA format, using the traditional SdI channels.
2. SdI receives the notification and sends it, in FatturaPA format, to the PA's Access Point Provider (Corner 3) through SdI's traditional channel.
3. The Access Point Provider of the Public Administration (Corner 3) converts the notification from FatturaPA format to UBL format, creating the Invoice Response.
4. The Access Point Provider of the Public Administration (Corner 3) uses PEPPOL's dynamic discovery to identify the Access Point (Corner 2) to which the Invoice Response should be delivered.
5. The Access Point Provider (Corner 3) sends the Invoice Response notice to the Access Point Provider of the Economic Operator (Corner 2) on the PEPPOL network.
6. The Access Point Provider of the Economic Operator (Corner 2) uses a notification method agreed upon between the parties to inform the original sender of the invoice (Corner 1) of the transmission outcome.

## Things to Note When Using SDI

### Simiplified flow
There is a simplified flow which can be adopted by those who interact with the Exchange System in their roles as both transmitter and receiver through the same transmission channel; in this case the flow of messages undergoes changes to enable greater efficiency in the process of transmitting electronic invoices and the related notices

### Digital ID
To use these services it is necessary to have an identity defined within the public Digital Identity System (SPID, CIE or CNS) or credentials issued by the Agency

## Important websites

|Website| Link|
|--|--|
| SDI Network| [Fatturapa](https://www.fatturapa.gov.it)|
|Registry of Italian Public Administrations|[Indicepa](https://indicepa.gov.it/ipa-portale/)|
|Fiscal Code validation|[Telematici](https://telematici.agenziaentrate.gov.it/VerificaCF/Scegli.do?parameter=verificaCf)|
|Channel registration|[Registration](https://www.fatturapa.gov.it/en/servizionline/accreditare-il-canale/accreditare-il-canale/)|
|Portale Fatture & Corrispettivi|[Signin](https://www.agenziaentrate.gov.it/portale/web/guest/schede/comunicazioni/fatture-e-corrispettivi/acc-servizio-fatture-e-corrispettivi)|

## Reference Links
* [Format of FatturaPA](https://www.fatturapa.gov.it/en/norme-e-regole/documentazione-fattura-elettronica/formato-fatturapa/)
* [FatturaPA Documentation](https://www.fatturapa.gov.it/en/norme-e-regole/documentazione-fattura-elettronica/formato-fatturapa/)
* [FatturaPA Examples](https://www.fatturapa.gov.it/en/lafatturapa/esempi/)
* [How to Sign FatturaPA](https://www.fatturapa.gov.it/en/comefare/operatori-economici/firmare-la-fatturapa/)
* [Electrnic invoices and free services of the Revenue Agency](https://www.agenziaentrate.gov.it/portale/documents/20143/233439/guida+fattura+elettronica+pa_Guida_La%2Bfattura_elettroniva_e_i_servizi_gratuiti_dell'Agenzia_delle_Entrate.pdf/6ed33b70-2716-4754-9000-f8d3c0d6b6b0?version=1.0)

[^1]: Decree provided for by the Italian Law number 633, 1972, article 21, subsection 1. 

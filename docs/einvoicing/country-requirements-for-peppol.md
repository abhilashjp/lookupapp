---
id: country-wise-requirements-for-peppol
title: Country wise requirements for Peppol
keywords: [Peppol, Electronic invoicing, E-invoicing, Cross-border transactions, Procurement, Country-specific requirements, Digitalization, VAT compliance, Tax regulations, Invoice requirements, E-procurement, European Union, Public sector, Business-to-government (B2G), Business-to-business (B2B), Invoice validation, Invoice processing, Supply chain management, Standards-based interoperability]
description: Discover the country-specific requirements for Peppol and stay compliant with our expert-written guide. From invoicing to procurement, we cover everything you need to know to successfully implement Peppol in your business.Stay ahead of the curve with our expert guidance on country-specific Peppol requirements, and streamline your cross-border transactions today.
sidebar_label: Country requirements for peppol
position: 2
tags:
  - Peppol
---

The countries that join the Peppol network have the opportunity to define national characteristics within clearly defined borders. These exceptions or specifications are usually a consequence of the legal framework in the countries. The special features must always be compatible with the specifications of the Peppol Interoperability Framework.

## Germany 

The following aspects are defined for Germany:

* If an electronic invoice is to be sent to the public administration within Germany via Peppol, the current version of the CIUS XRechnung must be used.
* If a biller addresses the public administration outside of Germany, he has the option of using the Peppol BIS Billing 3.0 format, which is acceptable for all Peppol recipients. Public administration in Germany is obliged to adopt this format. 
* The specification document for the CIUS XRechnung is currently only available in German. The standard XRechnung is provided in the UBL and CII syntaxes and can be sent accordingly via Peppol.
* The public administration has undertaken to use the routing ID scheme for the Peppol ID. The scheme has therefore been entered accordingly in ISO 6523 ICD. The associated prefix is 0204. A separator (:) is added between the prefix and ID.  

Peppol Authority: [Koordinierungsstelle für IT-Standards (KoSIT)](https://www.xoev.de/)

## Italy

PEPPOL SMP(Service Metadata Publisher) is integrated to iPA (“Indice delle pubbliche amministrazioni”, the national register of public bodies in Italy) in Italy and all Public Administrations can select their own Access Point on iPA itself. The Access Points act as an intermediary for the invoices received over the PEPPOL network. 

In order send and receive einvoices compliant with the European format via the PEPPOL network, they need to do the following
* The Public Administration needs to use a service provider that is both a Certified PEPPOL Access Point and a qualified intermediary towards the Revenue Agency’s SdI
* The Public Administration sets up the PEPPOL reception channel for the electronic billing offices on the iPA register.


The following codes are used for PEPPOL Participant IDs in Italy

* ITpartitaIVA - For economic operators
* CodiceFiscale - For economic operators
* CodiceIPA - For Public Administrations

Peppol Authority: [Agenzia per l'Italia Digitale - AgID ](https://peppol.agid.gov.it/en/) 

List of PEPPOL Access Point Providers recognized by the Italian PEPPOL Authority(AgID): [List of Access Points](https://peppol.agid.gov.it/en/qualification-ap-smp/ap-smp-list/)
 
 Techincal specifications for Italy : [Peppol BIS 3 valid for italy](https://peppol-docs.agid.gov.it/docs/my_index-ENG.jsp)
 
 ## Reference links
 * [Differences between XRechnung and  Peppol BIS Billing Invoice](https://xeinkauf.de/app/uploads/2022/11/CIUSse_im_Peppol_Kontext.pdf)
 * [Italy Peppol Authority requirements](https://peppol.org/wp-content/uploads/2022/08/Italy-Peppol-Authority-Specific-Requirements.pdf)

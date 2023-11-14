---
id: all-about-saft-reporting
title: All about Standard Audit File for Tax (SAF-T)
keywords: [SAF-T]
sidebar_label: SAF-T
tags:
  - SAF-T

---

The **Standard Audit File for Tax (SAF-T)** is an international standard for electronic exchange of reliable accounting data from organizations to a tax authority or external auditors. It was developed by the Organization for Economic Co-operation and Development (OECD) to facilitate tax compliance, audit, and cooperative compliance activities. 


## Purpose of SAF-T
SAF-T aims to enable businesses to provide a reliable extract of their accounting records to tax authorities in a standardized electronic format. This allows tax auditors to efficiently perform audit testing procedures on the data. SAF-T advances efforts in international tax transparency and cooperation between tax authorities.

The standardized format makes it easier for businesses to comply across different jurisdictions. It also reduces compliance costs compared to businesses having to provide data in multiple custom formats. For tax authorities, easy access to reliable accounting data in a standard format increases audit effectiveness and reduces administrative costs.

## Application of SAF-T
SAF-T is intended to be suitable for organizations of all sizes, from multinational enterprises to small and medium businesses. For large complex organizations, a customized SAF-T file may be required. But for most small and medium businesses, the standard data elements in SAF-T should cover their accounting system data.

SAF-T is primarily aimed at facilitating tax audits. Auditors can still verify original records as needed. SAF-T does not eliminate the need for proper record keeping and retention as required by law.

## Architecture

<table align="center" border="1px" border-color="#dedede"><tr><td>
  <img src="/docs/img/saft-architecture.PNG" alt="SAF-T Architecture"/>
  </td></tr>
  <tr><td align="center"> SAF-T Architecture</td></tr>
</table>

## Uses in Tax Audit
SAF-T enables both internal and external auditors to efficiently perform computer-assisted audit techniques, such as:

- Testing internal controls and transactions using data analytics
- Identifying risks and quantifying potential errors
- Improving targeting of audit resources
- Supporting voluntary compliance initiatives  

For example, auditors can use SAF-T data to automate compliance and substantive testing of accounting records down to the transaction level. This allows them to identify and focus on material errors more quickly compared to manual testing.

SAF-T can also enable businesses to perform self-testing and make any corrections before filing their tax returns. However, additional data may be needed in some cases to fully determine the tax liability.

## Benefits of SAF-T
The main benefits of SAF-T are:

For businesses:
- Reduces compliance costs of providing data to tax authorities
- Enables data exchange between business systems
- Facilitates voluntary self-auditing and compliance
- Provides a standardized data archive

For tax authorities: 
- Enhances efficiency and effectiveness of audits
- Reduces administrative costs 
- Enables cooperative compliance programs
- Provides data to quantify tax gaps

For auditors:
- Allows automated testing for efficiency
- Provides consistent reliable data
- Reduces onsite audit time

For software developers:
- Common standard reduces duplication 
- Structure covers multiple jurisdictions
- Facilitates development of audit tools

## Content of SAF-T
The SAF-T specification aims to capture key accounting data from a typical business system. The main areas covered are:

- General ledger
- Accounts receivable 
- Accounts payable
- Assets
- Inventory

Specifically, SAF-T includes data on master files, journals, invoices, orders, payments, depreciation, inventory movements, etc. related to these areas. 

The focus is on data relevant for tax compliance. Other areas like payroll are out of scope for the base SAF-T schema, but can be covered in country-specific extensions.

## Format of SAF-T
The OECD recommends SAF-T be provided in a structured data format suitable for automated processing, such as XML or XBRL. These are open standards that support data exchange and analysis. 

The current SAF-T technical schema provided by OECD uses XML. Tax authorities are encouraged to consider formats like XBRL that enable holistic audit automation and alignment with emerging international data standards.

Any proprietary binary formats that restrict interoperability should be avoided. The data structure and semantics are more important than the format itself. The format should serve the needs of data exchange and audit automation.

## Implementation Considerations
The SAF-T schema provides a standardized data model and baseline elements. But the specifics of implementation will vary between countries and software systems. 

Tax authorities and software developers need to collaborate on the localized implementation. This includes:

- Agreeing on mandatory and optional elements
- Handling of new and deprecated data fields
- Frequency and timing of SAF-T generation
- Constraint validation rules
- Conformance testing procedures

Tax authorities need to ensure local SAF-T requirements are compatible with the OECD model and minimize deviations that would place additional burden on software providers supporting multiple jurisdictions.

The SAF-T schema is designed to support flexibility via:

- Optional and mandatory element designations
- Extensibility points to add country-specific elements
- Relaxation of certain technical constraints 

## Recommended Implementation Tasks
To successfully adopt SAF-T, the OECD recommends tax authorities take the following implementation actions:

- Incorporate SAF-T into audit methodology and procedures
- Consider emerging standards like XBRL in automation strategy
- Collaborate with software providers on localization  
- Minimize country-specific deviations from OECD model
- Perform outreach and consultation with impacted stakeholders
- Provide SAF-T documentation, training and support
- Undertake pilot testing and impact assessment

Software providers should:

- Incorporate SAF-T export capability into products
- Collaborate with tax authorities on jurisdiction-specific requirements
- Develop tools and services to support SAF-T adoption 
- Provide SAF-T documentation and training to users
- Participate in industry outreach and testing initiatives

## SAF-T implemententation across the world  

<table align="center" border="1px" border-color="#dedede"><tr><td>
  <img src="/docs/img/saf-t-adoption.png" alt="SAF-T adoption"/>
  </td></tr>
  <tr><td align="center"> SAF-T Adoption</td></tr>
</table>

## Summary
The SAF-T standard enables more effective and efficient tax compliance and auditing in an increasingly digital business environment. Tax authorities and software providers have key roles to play in successfully implementing the standard at a country level. 

Following OECD guidance on the design, application, and localization of SAF-T will allow countries to realize the benefits of greater tax transparency while managing the costs and risks of transition for all stakeholders.


## Reference Doccuments
* [Guidance for the Standard Audit File – Tax by OECD](https://web-archive.oecd.org/2016-05-10/107470-45045602.pdf)
* [SAF-T Schema version 2.00](https://web-archive.oecd.org/2012-06-14/106283-45167181.pdf)

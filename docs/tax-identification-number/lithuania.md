---
id: lithuania-tax-id-guide
title: Lithuania TIN number guide
keywords: [TIN, Find PVM, Tax ID, Lithuania]
sidebar_label: Lithuania
description: Learn about TIN number in Lithuania. Use Lookuptax for hassle-free tax id validation in Lithuania and other 100+ countries
tags : 
  - Lithuania
  - TIN
---


## Asmens Kodas 

Asmens Kodas is also known as personal code. 

Format: 11 digits without spaces and delimiters

Pattern: 11 digits without spaces and delimiters, following this structure:

- One digit (1-6) representing the person's gender and century of birth.
- Six digits representing the birth date in the format YYMMDD.
- Three digits representing the serial number of the date of birth.
- One check digit for validation.

<table align="center" border="0px" border-color="#dedede"><tr><td>
  <img src="/docs/img/taxid/asmens-kodas.PNG" alt="Asmens Kodas"/>
  </td></tr>
  <tr><td align="center">Asmens Kodas</td></tr>
</table>

## TIN

TIN Structure: The Taxpayer Identification Number (TIN) follows the format TIN = F || SEQ || K, where:
- "F" is a fixed number, either 6 or 9.
- "SEQ" represents 8 digits generated from a sequence of natural numbers (e.g., 00000001, 00000002).
- "K" is a control number calculated using the algorithm described below.

The TIN is composed of a ten-digit number N9N8N7N6N5N4N3N2N1K, where the tenth digit (K) serves as the control number.

To validate the correctness of the taxpayer's identification number, follow the algorithm outlined in steps 2-8:

1. Extract digits N9 to N1 from the TIN.
2. Multiply each digit by the corresponding number in the sequence 9, 8, 7, 6, 5, 4, 3, 2, 1, and sum the results: A = Σ(Ni * i), where i = 1,…,9.
3. Divide the sum (A) by the two-digit number formed by the first two digits of the TIN (N9N8): B = A mod N9N8.
4. If B < 10, set K = B. If B >= 10, add the individual digits of B: Z = Σ(Sm), where m is the position of the digit.
5. If Z < 10, set K = Z. If Z >= 10, repeat the process of adding digits until Z < 10, and the final Z becomes the control number K of the TIN.

<table align="center" border="0px" border-color="#dedede"><tr><td>
  <img src="/docs/img/taxid/passport-lithuvania.PNG" alt="Passport"/>
  </td></tr>
  <tr><td align="center">Passport</td></tr>
</table>

<table align="center" border="0px" border-color="#dedede"><tr><td>
  <img src="/docs/img/taxid/dl-lithuvania.PNG" alt="Drivers license"/>
  </td></tr>
  <tr><td align="center">Drivers license</td></tr>
</table>

<table align="center" border="0px" border-color="#dedede"><tr><td>
  <img src="/docs/img/taxid/id-card-lithuvania.png" alt="ID card"/>
  </td></tr>
  <tr><td align="center">ID card</td></tr>
</table>


 ## PVM mokėtojo kodas
 
 PVM stands for Pridėtinės vertės mokestis. PVM mokėtojo kodas is the VAT number in Luthuvania

**Format**
PVM mokėtojo kodas consi9 or 12 digits. eg: LT999999999 or LT999999999999


----
**How [Lookuptax](https://lookuptax.com/) can help you in VAT validation?**

**Lookuptax VAT validation** revolutionizes VAT number validation with its robust platform, empowering businesses to seamlessly verify VAT numbers across over 100 countries. Our cutting-edge technology ensures accurate and efficient validation, reducing errors and enhancing compliance.

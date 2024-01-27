---
id: poland-tax-id-guide
title: Poland TIN number guide
keywords: [TIN, Find TIN, Tax ID, Poland]
sidebar_label: Poland
description: Learn about TIN number in Poland. Use Lookuptax for hassle-free tax id validation in Poland and other 100+ countries
tags : 
  - Poland
  - TIN
---

## PESEL
Starting from September 1st, 2011, Poland officially recognizes the PESEL number as the tax identification number for natural persons not engaged in business activities or registered for value added tax. The PESEL, an 11-digit numeric identifier, uniquely distinguishes individuals registered in the PESEL database, part of the Common Electronic System of Population Register. Information within this system originates from municipal offices' databases, housing municipal registration records.

The PESEL register has been operational since 1977, housing data of individuals permanently residing in Poland, as well as those with temporary residence exceeding 3 months. Additionally, it includes individuals applying for identity cards, passports, or requiring a social security number as per Polish law. The issuance of PESEL numbers falls under the jurisdiction of the Ministry of Internal Affairs. This structured system ensures efficient tax identification for individuals in Poland.

**PESEL Format**
1. The PESEL format consists of 11 characters structured as [C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11], where each C1 to C11 represents a numeric value. The range for these characters is numeric.

2. The PESEL follows specific rules:
   - C1-C2 signify the last two digits of the year of birth.
   - C3-C4 denote the month of birth. For birthdates between 1900 and 1999, no modification to C3-C4 is made. For other birthdates:
     - 1800-1899: The month field increases by 80.
     - 2000-2099: The month field increases by 20.
     - 2100-2199: The month field increases by 40.
     - 2200-2299: The month field increases by 60.
   - The method of coding the month of birth allows for distinguishing at least five centuries.
   - The following months in different centuries are represented by specific numbers.

3. The PESEL also includes:
   - C5-C6 representing the day of birth.
   - C7-C9 denoting an ordinal number.
   - C10 indicating the sex, with digits 0, 2, 4, 6, 8 for females and digits 1, 3, 5, 7, 9 for males.

4. To calculate the check digit:
   1. Multiply the values of each position by the corresponding weight.
   2. Add up the results.
   3. Deduct the sum from 10 to obtain the check digit.

5. For example: 02070803628 represents a person born on July 8, 1902, identified as female. 
  1. 0*1=0, 2*3=6, 0*7=0, 7*9=63, 0*1=0, 8*3=24,0*7=0, 3*9=27, 6*1=6 2*3=6;
  2. 0+6+0+3+0+4+0+7+6+6=32;
  3. 10-2=8;
  Following the calculation steps, the check digit is determined to be 8. 



<table align="center" border="0px" border-color="#dedede"><tr><td>
  <img src="/docs/img/taxid/id-poland-front.PNG" alt="PESEL on Poland ID Card"  title="PESEL on Poland ID Card"/>
  </td><td>
  <img src="/docs/img/taxid/id-poland-back.PNG" alt="PESEL on Poland ID Card"  title="PESEL on Poland ID Card"/>
  </td></tr>
  <tr><td align="center">PESEL on Poland ID Card -front</td><td align="center">PESEL on Poland ID Card -back</td></tr>
</table>


## Numer Identyfikacji Podatkowej (NIP)
Since September 1, 2011, Poland has implemented the issuance of TINs (Numer Identyfikacji Podatkowej or NIP) to various entities, including individuals, legal entities, non-legal entities, and other applicable entities, as per Polish regulations defining them as taxpayers or contributors to social security and health insurance. However, TINs assigned before August 31, 2011, are recognized as tax identification numbers under the regulations outlined in the Act of July 29, 2011, governing registration and identification. Consequently, decisions regarding the allocation of such tax identification numbers remain valid.


**NIP Format**

TIN Format:
The TIN structure follows a specific format represented as [C1, C2, C3, C4, C5, C6, C7, C8, C9, C10], where each C1 to C10 represents a character.

Numeric Range:
Each character (C1 to C10) within the TIN format falls within a numeric range.

Syntax:
RULE for C10:
1. The values of each position are multiplied by their corresponding weights:
   - C1: 6
   - C2: 5
   - C3: 7
   - C4: 2
   - C5: 3
   - C6: 4
   - C7: 5
   - C8: 6
   - C9: 7
2. The results of these multiplications are summed up.
3. The modulo 11 of the previous sum is obtained.
4. The remainder serves as the check digit (if the remainder is 10, the TIN is deemed invalid).

SAMPLE:
For example, consider TIN 2234567895:

1. Calculating the products: 2*6=12, 2*5=10, 3*7=21, 4*2=8, 5*3=15, 6*4=24, 7*5=35, 8*6=48, 9*7=63.
2. Summing up these products: 12+10+21+8+15+24+35+48+63=236.
3. Obtaining the modulo 11 of the sum: 236 % 11 = 5.
4. The check digit is determined as 5.


<table align="center" border="0px" border-color="#dedede"><tr><td>
  <img src="/docs/img/taxid/nip-poland.PNG" alt="NIP" title="NIP for Entities"/>
  </td></tr>
  <tr><td align="center">NIP for Entities</td></tr>
</table>

----
**How [Lookuptax](https://lookuptax.com/) can help you in VAT validation?**

**Lookuptax VAT validation** revolutionizes VAT number validation with its robust platform, empowering businesses to seamlessly verify VAT numbers across over 100 countries. Our cutting-edge technology ensures accurate and efficient validation, reducing errors and enhancing compliance.
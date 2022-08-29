---
title: Countries and Vat Names
keywords: [EU VAT name,VAT number]
tags:
  - VAT IDs
 
---


|Country|Country code|VAT in national language|Stucture|Format|Regex|Remarks|
|--|--|--|--|--|--|--|
|Austria|AT|Umsatzsteuer – Identifikationsnummer(USt)|U12345678|9 characters. The first character is always ‘U’|`(U\d{8}$)/i)`| |
|Belgium|BE|le numéro d’identification ą la taxe sur la valeur ajoutée BTW – identificatienummer(BTW, TVA, NWSt)|1234567890|10 characters. Prefix with zero ‘0’ if the customer provides a 9 digit VAT number|`(\d{10}$)/i)`| |
|Bulgaria|BG|Идентификационен номер по ДДС(ДДС)|123456789, 1234567890|9 or 10 characters.|`(\d{9,10}$)/i)`| |
|Croatia |HR|PDV identifikacijski broj|12345678901|11 characters|`(\d{11}$)/i)`| |
|Cyprus|CY|Αριθμός Εγγραφής Φ.Π.Α.; Arithmos Egrafis FPA|12345678X|9 characters. The last character must always be a letter. |`([0-5\|9]\d{7}[A-Z]$)/i)`| |
|Czech Republic|CZ|danové identifikacnķ cķslo (DIC/DPH)|12345678, 123456789, 1234567890|8, 9 or 10 characters. If more than 10 characters are provided delete the first 3 as these are a tax code.|`(\d{8,10})?$/i)`| |
|Denmark[^1]|DK|momsregistreringsnummer(moms)|12345678|8 characters.|`(\d{8}$)/i)`|Except the Faroe Islands and Greenland |
|Estionia|EE|käibemaksukohustuslasena registreerimise number(km)|123456789|9 characters.|`(10\d{7}$)/i)`| |
|Finland|FI|arvonlisćverorekisterõintinumero; Mervärdesskatteregistreringsnummer (momsregistreringsnummer)(ALV, Moms)|12345678|8 characters.|`(\d{8}$)/i)`|Excluding the Åland Islands|
|France|FR|le numéro d’identification ą la taxe sur la valeur ajoutée(TVA)|12345678901, X1234567890, 1X123456789, XX123456789|11 characters. May include alphabetical characters (any except O or I) as first or second or first and second characters.|`([0-9A-Z]{2}[0-9]{9}$)/i)`|Including Monaco but excluding Guadeloupe, Martinique, Réunion, St Pierre and Miquelon, and French Guiana|"
|Germany|DE|Umsatzsteuer – Identifikationsnummer(MwSt., Ust.)|123456789|9 characters.|`([1-9]\d{8}$)/i)`|Except Büsingen and the Isle of Heligoland|
|Greece|EL|Αριθμός Φορολογικού Μητρώου ΦΠΑ; Arithmos Forologikou Mitroou FPA|123456789|9 characters.|`(\d{9}$)/i)`| |
|Hungary|HU|közösségi adószįm(ÁFA)|12345678|8 characters.|`(\d{8}$)/i)`| |
|India|IN|GST identification number(GSTIN)| | |` `|  |
|Ireland|IE|value added tax identification no.(CBL, VAT)|1234567X, 1X23456X, 1234567XX|8 or 9 characters. Includes one or two alphabetical characters (last, or second and last, or last 2).|`([0-9A-Z\*\+]{7}[A-Z]{1,2}$)/i)`| |"
|Italy|IT|il numero di registrazione IVA|12345678901|11 characters.|`(\d{11}$)/i)`|Except the communes of Livigno and Campione d’Italia and the Italian waters of Lake Lugano|
|Latvia|LV|pievienotas vertibas nodokla (PVN) registracijas numurs|12345678901|11 characters.|`(\d{11}$)/i)`| |
|Lithuania|LT|PVM moketojo kodas|123456789, 123456789012|9 or 12 characters.|`(\d{9}$\|\d{12}$)/i)`| |
|Luxembourg|LU|le numéro d’identification ą la taxe sur la valeur ajoutée(TVA)|12345678|8 characters.|`(\d{8}$)/i)`|  |
|Malta|MT|numru ta’ l-identifikazzjoni tat-taxxa fuq il-valur miśjud; value added tax identification number(VAT)|12345678|8 characters.|`([1-9]\d{7}$)/i)`||
|Netherlands|NL|BTW – identificatienummer|123456789B01|12 characters. The tenth character is always B.|`(\d{9}B\d{2}$)/i)`| |"
|Norway|NO|VAT| | |`(\d{9}$)/i)`| |
|Poland|PL|Numer identyfikacyjny VAT(PTU)|1234567890|10 characters|`(\d{10}$)/i)`| |
|Portugal|PT|o nśmero de identificaēćo para efeitos do imposto sobre o valor acrescentado(IVA)|123456789|9 characters.|`(\d{9}$)/i)`|Including the Azores and Madeira|
|Romania|RO|cod de īnregistrare īn scopuri de TVA|12, 123, 1234, 12345, 123456, 1234567, 12345678, 123456789, 1234567890|From 2 to 10 characters.|`([1-9]\d{1,9}$)/i)`| |
|Slovakia|SK|identifikacné cķslo pre dan (IC DPH)|1234567890|10 characters|`([1-9]\d[(2-4)\|(6-9)]\d{7}$)/i)`| |
|Slovenia|SI|identifikacijska številka za (DDV)|12345678|8 characters|`([1-9]\d{7}$)/i)`| |
|Spain|ES|el nśmero de identificación a efectos del Impuesto sobre el Valor Añadido(IVA)|X12345678, 12345678X, X1234567X|9 characters. Includes one or two alphabetical characters (first or last or first and last).|`([0-9A-Z][0-9]{7}[0-9A-Z]$)/i)`|Including the Balearic Islands but excluding Ceuta, Melilla and the Canary Islands|
|Sweden|SE|Mervärdesskatteregistreringsnummer (momsregistreringsnummer)(Moms)|123456789012|12 characters|`(\d{10}01$)/i)`| |
|UK|GB|value added tax (VAT) registration no.| | |`(?:[0-9]{12}\|[0-9]{9}|(?:GD|HA)[0-9]{3})$)/i)`||
|Northern Ireland|XI| |999999999, 999999999999, GD999, HA999| |` `| |

[^1]: Except the Faroe Islands and Greenland

## Reference links
* [EU website](https://taxation-customs.ec.europa.eu/system/files/2016-09/vat_in_ec_annexii.pdf)
* [Format,#Q11](https://ec.europa.eu/taxation_customs/vies/#/faq)
* [UK Official guide](https://www.gov.uk/guidance/vat-eu-country-codes-vat-numbers-and-vat-in-other-languages)
* [Test VAT number](https://web.archive.org/web/20170727163017/http://www.braemoor.co.uk/software/vattest.php)
* [Format and explainations](https://euipo.europa.eu/tunnel-web/secure/webdav/guest/document_library/Documents/COSME/VAT%20numbers%20EU.pdf)
* [Oreilly guide](https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s21.html)




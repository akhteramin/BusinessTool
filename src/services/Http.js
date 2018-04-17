import axios from 'axios';

import { API } from '../constant';

const {bg, typicode} = API;

const headers = {'Content-Type': 'application/json', 'Accept': 'application/json'};
const routes = {
    get_posts: `${typicode}/posts`,
    get_comments: `${typicode}/comments`,
    bank_statement: `${bg}/reconciliation/bank-statement`
};

const encodeQueryData = data => {
    let ret = [], temp;
    for (let i in data) {
        temp = data[i];
        if (temp !== '' && temp !== null) {
            ret.push(encodeURIComponent(i) + '=' + encodeURIComponent(temp));
        }
    }
    return ret.length ? '?' + ret.join('&') : '';
};

const Http = {
    GET: (key, params = '') => {
        params = typeof params === 'object' ? encodeQueryData(params) : params;
        return axios.get(routes[key] + params, {headers});
    },
    POST: (key, params) => {
        return axios.post(routes[key], params, headers);
    },
    PUT: (key, params) => {
        return axios.put(routes[key], params, headers);
    },
    UPLOAD: (key, {name, file}) => {
        const formData = new FormData();
        formData.append(name, file);

        return axios.post(routes[key], formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
    /*
    ,
    GET_TRANSACTIONS_BY_ID: () => {
        return {
            'bankStatementMetaData': {
                'id': 5,
                'fileName': '36000000097_16_40_26_February_2018.xls',
                'accountName': 'iPAY SYSTEMS LIMITED',
                'accountNumber': '36000000097',
                'address': 'SILVER TOWER (12TH FLOOR ), 52, GULSHAN AVENUE, G',
                'accountType': 'SPECIAL NOTICE DEPOSIT (SND) ACCOUNT - GENERAL',
                'city': 'Dhaka',
                'currency': 'BDT',
                'phone': '01746208346',
                'accountStatus': 'REGULAR',
                'period': '20/02/2018 to 20/02/2018',
                'generationDate': '26-Feb-2018  4:40 pm',
                'executionTime': 1521094204752
            },
            'transactionList': [
                {
                    'bankStatementTransaction': {
                        'id': 709,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Evan Hossain AC/No. 1234567894 of HABIB BANK LTD. (090100378) - 2387',
                        'transactionMode': 'Clearing',
                        'creditAmount': 100,
                        'debitAmount': 0,
                        'balance': 2415720.52,
                        'action': 'EXECUTE',
                        'status': 102,
                        'transactionId': '26I278-1606EBCF0E3',
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 710,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] Outward PPD Fund Trans to test AC/No. 1234567901 of AL-ARAFAH ISLAMI BANK LTD. (210261697) - 2355',
                        'transactionMode': 'Clearing',
                        'creditAmount': 1022,
                        'debitAmount': 0,
                        'balance': 2416120.52,
                        'action': 'EXECUTE',
                        'status': 102,
                        'transactionId': '27I5768-16043C76E82',
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 711,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Md.Anowar Hossen AC/No. 0034226026 of SONALI BANK LTD. (200730312) - 28427',
                        'transactionMode': 'Clearing',
                        'creditAmount': 10,
                        'debitAmount': 0,
                        'balance': 2416130.52,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 712,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Dhiman Goswami AC/No. 0440434290246 of SONALI BANK LTD. (200270522) - 28437',
                        'transactionMode': 'Clearing',
                        'creditAmount': 1125,
                        'debitAmount': 0,
                        'balance': 2417255.52,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 713,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Raisul Arefin Nahid AC/No. 112912121249032 of MERCANTILE BANK LTD. (140261725) - 28438',
                        'transactionMode': 'Clearing',
                        'creditAmount': 10,
                        'debitAmount': 0,
                        'balance': 2417265.52,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 714,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] Outward PPD Fund Trans to CHUWDHURI MD  AC/No. 2101557794001 of THE CITY BANK LTD. (225290529) - 28451',
                        'transactionMode': 'Clearing',
                        'creditAmount': 500,
                        'debitAmount': 0,
                        'balance': 2417765.52,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 715,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Newton Mutsudhi AC/No. 1024055374031 of IFIC BANK LTD. (120264634) - 28454',
                        'transactionMode': 'Clearing',
                        'creditAmount': 200,
                        'debitAmount': 0,
                        'balance': 2417965.52,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 716,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Tasfiqul Ghani AC/No. 148151144645 of DUTCH-BANGLA BANK LTD (090263978) - 28465',
                        'transactionMode': 'Clearing',
                        'creditAmount': 10,
                        'debitAmount': 0,
                        'balance': 2417975.52,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 717,
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Md Rashed U AC/No. 20620032873 of DHAKA BANK LTD. (085260436) - 27565',
                        'transactionMode': 'Clearing',
                        'creditAmount': 10000,
                        'debitAmount': 0,
                        'balance': 2837324.62,
                        'action': 'DUPLICATE',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 718,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Kamrun Nahar  AC/No. 02366126101 of STANDARD CHARTERED BANK (215261726) - 28474',
                        'transactionMode': 'Clearing',
                        'creditAmount': 100,
                        'debitAmount': 0,
                        'balance': 2418085.52,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 719,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Anindya paul AC/No. 0200002695852 of AGRANI BANK LTD. (010262267) - 28497',
                        'transactionMode': 'Clearing',
                        'creditAmount': 20,
                        'debitAmount': 0,
                        'balance': 2418105.52,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 720,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Ahmed Tanvir AC/No. 1530202524102001 of BRAC BANK LTD. (060264644) - 28509',
                        'transactionMode': 'Clearing',
                        'creditAmount': 500,
                        'debitAmount': 0,
                        'balance': 2418605.52,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 721,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] Outward PPD Fund Trans to MD ABDULLAH AC/No. 0221440056042 of EASTERN BANK LTD. (095750060) - 28512',
                        'transactionMode': 'Clearing',
                        'creditAmount': 50,
                        'debitAmount': 0,
                        'balance': 2418655.52,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 722,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Nurul Afsar Raaj AC/No. 00081040002014 of MIDLAND BANK LIMITED (285261185) - 28515',
                        'transactionMode': 'Clearing',
                        'creditAmount': 65,
                        'debitAmount': 0,
                        'balance': 2418720.52,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 723,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Saddam Hossain AC/No. 164151315105 of DUTCH-BANGLA BANK LTD (090263136) - 28517',
                        'transactionMode': 'Clearing',
                        'creditAmount': 50,
                        'debitAmount': 0,
                        'balance': 2418770.52,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 724,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] Outward PPD Fund Trans to MINHAJ UDDIN A AC/No. 112912117203947 of MERCANTILE BANK LTD. (140261725) - 28533',
                        'transactionMode': 'Clearing',
                        'creditAmount': 100,
                        'debitAmount': 0,
                        'balance': 2418870.52,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 725,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Md Salah AC/No. 0393100000458 of BANGLADESH COMMERCE BANK LTD. (030060373) - 28545',
                        'transactionMode': 'Clearing',
                        'creditAmount': 100,
                        'debitAmount': 0,
                        'balance': 2418970.52,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 726,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Md Mahmudul Hasa AC/No. 1471030235792 of DUTCH-BANGLA BANK LTD (090260555) - 28575',
                        'transactionMode': 'Clearing',
                        'creditAmount': 102,
                        'debitAmount': 0,
                        'balance': 2419072.52,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 727,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] Outward PPD Fund Trans to ABU HENA MD  AC/No. 7020311051719 of TRUST BANK LTD. (240275358) - 28590',
                        'transactionMode': 'Clearing',
                        'creditAmount': 11,
                        'debitAmount': 0,
                        'balance': 2419083.52,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 728,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] Outward PPD Fund Trans to AFRANA AHMED  AC/No. 21320048571 of DHAKA BANK LTD. (085261422) - 28592',
                        'transactionMode': 'Clearing',
                        'creditAmount': 10,
                        'debitAmount': 0,
                        'balance': 2419093.52,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 729,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Parvez Md Jabed AC/No. 125151221366 of DUTCH-BANGLA BANK LTD (090100378) - 28615',
                        'transactionMode': 'Clearing',
                        'creditAmount': 10,
                        'debitAmount': 0,
                        'balance': 2419103.52,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 730,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Arifuzzaman Ronee AC/No. 2150201178215 of ISLAMI BANK BANGLDESH LTD. (125261337) - 28479',
                        'transactionMode': 'Clearing',
                        'creditAmount': 200,
                        'debitAmount': 0,
                        'balance': 2419303.52,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 731,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Mir Mossarrof Hossain AC/No. 1506202095956001 of BRAC BANK LTD. (060261184) - 28595',
                        'transactionMode': 'Clearing',
                        'creditAmount': 100,
                        'debitAmount': 0,
                        'balance': 2419403.52,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 732,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Md. Sazzad Hasan AC/No. 14715161375 of DUTCH-BANGLA BANK LTD (090260555) - 28623',
                        'transactionMode': 'Clearing',
                        'creditAmount': 50,
                        'debitAmount': 0,
                        'balance': 2419453.52,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 733,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To ISLAMI BANK BANGLDESH LTD.  [2150201178215]  [R01 - Insufficient Funds]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 200,
                        'balance': 2419253.52,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 734,
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD iPAY SYSTE To SONALI BANK LTD. [4111133013859] [R09 - Uncollected Funds]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 1500,
                        'balance': 2842124.74,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 735,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To BANGLADESH DEVELOPMENT BANK LTD.  [0280652148]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.32,
                        'debitAmount': 0,
                        'balance': 2409253.84,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 736,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To IFIC BANK LTD.  [1025626347031]  [R16 - Account Frozen]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.78,
                        'debitAmount': 0,
                        'balance': 2409254.62,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 737,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To IFIC BANK LTD.  [2157740583]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.37,
                        'debitAmount': 0,
                        'balance': 2409254.99,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 738,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To AL-ARAFAH ISLAMI BANK LTD.  [1992458777]  [R03 - No Account/Unable to Locate Account]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.64,
                        'debitAmount': 0,
                        'balance': 2409255.63,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 739,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To SBAC BANK LIMITED  [0009111003361]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.05,
                        'debitAmount': 0,
                        'balance': 2409255.68,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 740,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To UNITED COMMERCIAL BANK LTD.  [1683201000082186]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.89,
                        'debitAmount': 0,
                        'balance': 2409256.57,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 741,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To ISLAMI BANK BANGLDESH LTD.  [4006700000205]  [R03 - No Account/Unable to Locate Account]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.71,
                        'debitAmount': 0,
                        'balance': 2409257.28,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 742,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To RUPALI BANK LTD.  [4408010008109]  [R03 - No Account/Unable to Locate Account]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.74,
                        'debitAmount': 0,
                        'balance': 2409258.02,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 743,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To BANK ASIA LTD.  [61134000235]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.96,
                        'debitAmount': 0,
                        'balance': 2409258.98,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 744,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To BANK ASIA LTD.  [108390002589]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.57,
                        'debitAmount': 0,
                        'balance': 2409259.55,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 745,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To AL-ARAFAH ISLAMI BANK LTD.  [12255635632545]  [R03 - No Account/Unable to Locate Account]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.72,
                        'debitAmount': 0,
                        'balance': 2409260.27,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 746,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To EASTERN BANK LTD.  [54600857918601]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.89,
                        'debitAmount': 0,
                        'balance': 2409261.16,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 747,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To PUBALI BANK LTD.  [3842101054184]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.76,
                        'debitAmount': 0,
                        'balance': 2409261.92,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 748,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To EXIM BANK LTD.  [03912100231318]  [R03 - No Account/Unable to Locate Account]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.76,
                        'debitAmount': 0,
                        'balance': 2409262.68,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 749,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To BANGLADESH COMMERCE BANK LTD.  [25802158181]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.36,
                        'debitAmount': 0,
                        'balance': 2409263.04,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 750,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To SONALI BANK LTD.  [1234139767]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.28,
                        'debitAmount': 0,
                        'balance': 2409263.32,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 751,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To STANDARD CHARTERED BANK  [1856653101]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.12,
                        'debitAmount': 0,
                        'balance': 2409263.44,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 752,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To DUTCH-BANGLA BANK LTD  [5300721130387191]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.6,
                        'debitAmount': 0,
                        'balance': 2409264.04,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 753,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To DUTCH-BANGLA BANK LTD  [10115116152]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.12,
                        'debitAmount': 0,
                        'balance': 2409264.16,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 754,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To DUTCH-BANGLA BANK LTD  [127000410777]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.18,
                        'debitAmount': 0,
                        'balance': 2409264.34,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 755,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To DUTCH-BANGLA BANK LTD  [13551202738]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.11,
                        'debitAmount': 0,
                        'balance': 2409264.45,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 756,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To DUTCH-BANGLA BANK LTD  [019479141384]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.13,
                        'debitAmount': 0,
                        'balance': 2409264.58,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 757,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To DUTCH-BANGLA BANK LTD  [017516834277]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.31,
                        'debitAmount': 0,
                        'balance': 2409264.89,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 758,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To SONALI BANK LTD.  [0034226026]  [R09 - Uncollected Funds]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 10,
                        'balance': 2409254.89,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 759,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To SONALI BANK LTD.  [0440434290246]  [R09 - Uncollected Funds]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 1125,
                        'balance': 2408129.89,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 760,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [UTTARA BANK LTD.] [BARGUNA BRANCH] AC/No. 1237894560987624 [ OZONG RESTA] SL:113510 - 2483',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.78,
                        'balance': 2408129.2,
                        'action': 'EXECUTE',
                        'status': 102,
                        'transactionId': '17I178-161B1AC9899',
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 761,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [THE CITY BANK LTD.] [GULSHAN AVENUE BRANCH]  AC/No. 2251829932001 [ Masudul Haque ] SL:113511 - 28725',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.42,
                        'balance': 2408128.78,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 762,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [MERCANTILE BANK LTD.] [ELEPHANT ROAD BRANCH]  AC/No. 111811122889685 [ Double Decker] SL:113512 - 28726',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.33,
                        'balance': 2408128.45,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 763,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [SBAC BANK LIMITED] [UTTARA BRANCH]  AC/No. 0009120007911 [ Sakia Lutfa] SL:113513 - 28730',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.42,
                        'balance': 2408128.03,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 764,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [AL-ARAFAH ISLAMI BANK LTD.] [NEW ELEPHANT ROAD BRANCH]  AC/No. 0161020010579 [ Green Valley Sy] SL:113515 - 28732',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.22,
                        'balance': 2408127.81,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 765,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [THE CITY BANK LTD.] [GULSHAN BRANCH]  AC/No. 2251895299001 [ Shama Rahman] SL:113516 - 28733',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.22,
                        'balance': 2408127.59,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 766,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [AL-ARAFAH ISLAMI BANK LTD.] [FARIDPUR BRANCH]  AC/No. 1141020003518 [ GFC Design &] SL:113519 - 28740',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.5,
                        'balance': 2408127.09,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 767,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [SAYEDPUR BRANCH]  AC/No. 7017015561777 [ Chandra Kishor ] SL:113522 - 28745',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.97,
                        'balance': 2408126.12,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 768,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [EXIM BANK LTD.] [TANGAIL]  AC/No. 9312100011261 [ Rezwan] SL:113524 - 28748',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.6,
                        'balance': 2408125.52,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 769,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [MONOHARDI BRANCH]  AC/No. 017193726910 [ Abdullah UL Mahin] SL:113525 - 28749',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.25,
                        'balance': 2408125.27,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 770,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [AB BANK LTD.] [UTTARA BRANCH]  AC/No. 4020713390300 [ Fairuz Jabbar Mahdi] SL:113528 - 28754',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.67,
                        'balance': 2408124.6,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 771,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [THE CITY BANK LTD.] [PALLABI BRANCH]  AC/No. 2101975405001 [ Md Sabbir Ahmed] SL:113529 - 28755',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.38,
                        'balance': 2408124.22,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 772,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [DHAKA BANK LTD.] [PABNA]  AC/No. 3012003912 [ Md.Rakibul Islam] SL:113532 - 28759',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.89,
                        'balance': 2408123.33,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 773,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [BRAC BANK LTD.] [UTTARA BRANCH]  AC/No. 1510202976798001 [ Host Might] SL:113534 - 28762',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.23,
                        'balance': 2408123.1,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 774,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [BANANI BRANCH]  AC/No. 1031510061340 [ Md Arafat Rahman] SL:113535 - 28763',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.3,
                        'balance': 2408122.8,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 775,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [PATUAKHALI BRANCH]  AC/No. 2181510010492 [ Md Abul Bashar] SL:113536 - 28764',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.57,
                        'balance': 2408122.23,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 776,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [ISLAMI BANK BANGLDESH LTD.] [LOCAL OFFICE BRANCH]  AC/No. 1020207694806 [ MD.JEWEL RANA] SL:113537 - 28766',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.49,
                        'balance': 2408121.74,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 777,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [BRAC BANK LTD.] [MOTIJHEEL BRANCH]  AC/No. 1513202673498001 [ Shakibuzzahan ] SL:113539 - 28768',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.42,
                        'balance': 2408121.32,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 778,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [FIRST SECURITY ISLAMI BANK LTD.] [CITY UNIVERSITY BRANCH]  AC/No. 017812800000555 [ Tamim Iqbal] SL:113540 - 28769',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.31,
                        'balance': 2408121.01,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 779,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [SYLHET BRANCH]  AC/No. 1211010342008 [ Anwar Mahmud ] SL:113541 - 28770',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.61,
                        'balance': 2408120.4,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 780,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [SHAHJALAL ISLAMI BANK LTD.] [MURADPUR BRANCH]  AC/No. 300412100227660 [ Kazi Md. Showkat] SL:113542 - 28771',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.77,
                        'balance': 2408119.63,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 781,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [BANK ASIA LTD.] [MUKSUDPUR]  AC/No. 4012867658181 [ Dipto Saha] SL:113543 - 28778',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.94,
                        'balance': 2408118.69,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 782,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [CHOUMOHANI BRANCH]  AC/No. 18221030005813 [ Naim Ibne Mosarof] SL:113544 - 28780',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.27,
                        'balance': 2408118.42,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 783,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [AB BANK LTD.] [DINAJPUR BRANCH]  AC/No. 4208720463300 [ Joydev Kumer ] SL:113545 - 28781',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.86,
                        'balance': 2408117.56,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 784,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [KARWAN BAZAR BRANCH]  AC/No. 1071010148860 [ Sadekur Rahman ] SL:113546 - 28785',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.04,
                        'balance': 2408117.52,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 785,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [CITI BANK N A] [CHITTAGONG BRANCH]  AC/No. 2101986356001 [ Ali Akbar] SL:113549 - 28788',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.09,
                        'balance': 2408117.43,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 786,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [MERCANTILE BANK LTD.] [GULSHAN BRANCH]  AC/No. 112912117203947 [ MINHAJ UDDIN ] SL:113550 - 28791',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 150,
                        'balance': 2407967.43,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 787,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [STANDARD CHARTERED BANK] [GULSHAN NORTH BRANCH]  AC/No. 18125550201 [ Proma Paromita] SL:113551 - 28793',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 975,
                        'balance': 2406992.43,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 788,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [BRAC BANK LTD.] [GULSHAN BRANCH]  AC/No. 1501102350693001 [ M. Monirul Islam] SL:113552 - 28794',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 30000,
                        'balance': 2376992.43,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 789,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [SATMASJID ROAD BRANCH]  AC/No. 17110164067 [ Md. Wahidul Azam] SL:113553 - 28796',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 19000,
                        'balance': 2357992.43,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 790,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [HONGKONG & SHANGHAI BANKING CORP.] [BANANI BRANCH]  AC/No. 009096595011 [ Abu Sayed Md Arif] SL:113555 - 28800',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.89,
                        'balance': 2357991.54,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 791,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [THE CITY BANK LTD.] [KARWAN BAZAR BRANCH]  AC/No. 2401808200001 [ Md. Akmal Sharif] SL:113556 - 28801',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 250,
                        'balance': 2357741.54,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 792,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [DHANMONDI BRANCH]  AC/No. 11015158368 [ Md. Gul Jamal Zim] SL:113557 - 28802',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.71,
                        'balance': 2357740.83,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 793,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [AB BANK LTD.] [GULSHAN BRANCH]  AC/No. 4019467131300 [ Fahmida Ahmed] SL:113559 - 28804',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.02,
                        'balance': 2357740.81,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 794,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [ISLAMI BANK BANGLDESH LTD.] [FENI BRANCH]  AC/No. 1220206259217 [ Akramul Hoque] SL:113560 - 28806',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.58,
                        'balance': 2357740.23,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 795,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [THE CITY BANK LTD.] [BANANI BRANCH]  AC/No. 2401528773001 [ Md Mehedi Hassan ] SL:113562 - 28729',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 3475,
                        'balance': 2354265.23,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 796,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [AGRANI BANK LTD.] [SADARGHAT BRANCH]  AC/No. 0200000777161 [ BEGUM UMMYA ] SL:113563 - 28734',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.14,
                        'balance': 2354265.09,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 797,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [THE CITY BANK LTD.] [MIRPUR BRANCH]  AC/No. 2701904685001 [ Atahar Shakil] SL:113564 - 28738',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.14,
                        'balance': 2354264.95,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 798,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [ISLAMI BANK BANGLDESH LTD.] [RAMU BRANCH]  AC/No. 3610854364 [ Absar Khan] SL:113565 - 28741',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.61,
                        'balance': 2354264.34,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 799,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [ISLAMI BANK BANGLDESH LTD.] [C.D.A. AVENUE BRANCH]  AC/No. 1936700069412 [ Abdul Matin] SL:113567 - 28751',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.37,
                        'balance': 2354263.97,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 800,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [NRB BANK] [KHULNA]  AC/No. 0112000218396 [ Md.Bellal Sheikh] SL:113569 - 28761',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.86,
                        'balance': 2354263.11,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 801,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [COMILLA BRANCH]  AC/No. 141101246921 [ Md. Shariful Islam] SL:113570 - 28774',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.71,
                        'balance': 2354262.4,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 802,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [MOULAVI BAZAR BRANCH]  AC/No. 13215192985 [ Ebad Mozumdar] SL:113571 - 28782',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.68,
                        'balance': 2354261.72,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 803,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [BOGRA BRANCH]  AC/No. 017175171771 [ MD.SIDDIK H] SL:113572 - 28792',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 3900,
                        'balance': 2350361.72,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                },
                {
                    'bankStatementTransaction': {
                        'id': 804,
                        'transactionDate': 1519063200000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [DANIA BRANCH]  AC/No. 1191010050142 [ Emdad Hossain] SL:113573 - 28797',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.46,
                        'balance': 2350361.26,
                        'action': 'UNMATCHED',
                        'status': 200,
                        'transactionId': null,
                        'fileId': 5
                    }
                }
            ]
        };
    },
    GET_TRANSACTIONS: () => {
        return {
            'message': 'Operation Successful',
            'bankStatementMetaData': {
                'id': null,
                'fileName': '36000000097_21_03_18_February_2018.xls',
                'accountName': 'iPAY SYSTEMS LIMITED',
                'accountNumber': '36000000097',
                'address': 'SILVER TOWER (12TH FLOOR ), 52, GULSHAN AVENUE, G',
                'accountType': 'SPECIAL NOTICE DEPOSIT (SND) ACCOUNT - GENERAL',
                'city': 'Dhaka',
                'currency': 'BDT',
                'phone': '01746208346',
                'accountStatus': 'REGULAR',
                'period': '11/02/2018 to 13/02/2018',
                'generationDate': '13-Feb-2018  1:01 pm',
                'executionTime': 1521612403063
            },
            'transactionList': [
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Md Rashed U AC/No. 20620032873 of DHAKA BANK LTD. (085260436) - 27565',
                        'transactionMode': 'Clearing',
                        'creditAmount': 10000,
                        'debitAmount': 0,
                        'balance': 2837324.62
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Kazi Moniruzzaman AC/No. 111312118552793 of MERCANTILE BANK LTD. (140263194) - 27582',
                        'transactionMode': 'Clearing',
                        'creditAmount': 450,
                        'debitAmount': 0,
                        'balance': 2837774.62
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Evanka AC/No. 13131313131 of AB BANK LTD. (090264030) - 2168',
                        'transactionMode': 'Clearing',
                        'creditAmount': 100,
                        'debitAmount': 0,
                        'balance': 2838774.62
                    },
                    'iPayTransactions': [
                        {
                            'id': 2168,
                            'accountId': '657',
                            'creditAmount': null,
                            'debitAmount': 100,
                            'bankAccountName': 'Evanka',
                            'bankAccountNumber': '13131313131',
                            'bankCode': '020',
                            'bankName': 'AB BANK LTD.',
                            'branchCode': '037',
                            'branchName': 'BOGRA',
                            'requestTime': 1519793654267,
                            'serviceId': 3001,
                            'serviceName': 'Add Money',
                            'statusDescription': 'SENT TO BANK',
                            'transactionId': '25I657-15EE67E7EE7',
                            'purpose': null
                        }
                    ],
                    'status': 'MATCHED',
                    'category': 'SUCCESSFUL',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Ratan Chandra  AC/No. 3555101125035 of PUBALI BANK LTD. (175275357) - 27607',
                        'transactionMode': 'Clearing',
                        'creditAmount': 450,
                        'debitAmount': 0,
                        'balance': 2839224.62
                    },
                    'iPayTransactions': [
                        {
                            'id': 2168,
                            'accountId': '657',
                            'creditAmount': null,
                            'debitAmount': 100,
                            'bankAccountName': 'Evanka',
                            'bankAccountNumber': '13131313131',
                            'bankCode': '020',
                            'bankName': 'AB BANK LTD.',
                            'branchCode': '037',
                            'branchName': 'BOGRA',
                            'requestTime': 1519793654267,
                            'serviceId': 3001,
                            'serviceName': 'Add Money',
                            'statusDescription': 'SENT TO BANK',
                            'transactionId': '25I657-15EE67E7EE7',
                            'purpose': null
                        }
                    ],
                    'status': 'MATCHED',
                    'category': 'REVERTED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Salim Al Deen  AC/No. 1061050013828 of NRB BANK (290264630) - 27608',
                        'transactionMode': 'Clearing',
                        'creditAmount': 20,
                        'debitAmount': 0,
                        'balance': 2839244.62
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Bablur Rahman AC/No. 120151137045 of DUTCH-BANGLA BANK LTD (090471544) - 27619',
                        'transactionMode': 'Clearing',
                        'creditAmount': 100,
                        'debitAmount': 0,
                        'balance': 2839344.62
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Md. Maniruzzaman AC/No. 2181801828001 of THE CITY BANK LTD. (225261729) - 27621',
                        'transactionMode': 'Clearing',
                        'creditAmount': 100,
                        'debitAmount': 0,
                        'balance': 2839444.62
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Debasish Nay AC/No. 11021020027972 of PRIME BANK LTD. (170263193) - 27651',
                        'transactionMode': 'Clearing',
                        'creditAmount': 500,
                        'debitAmount': 0,
                        'balance': 2839944.62
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] Outward PPD Fund Trans to MIR REASIF  AC/No. 0483202000000127 of UNITED COMMERCIAL BANK LTD. (245913310) - 27653',
                        'transactionMode': 'Clearing',
                        'creditAmount': 50,
                        'debitAmount': 0,
                        'balance': 2839994.62
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Md. Shoyaib AC/No. 1371050027860 of DUTCH-BANGLA BANK LTD (090264122) - 27737',
                        'transactionMode': 'Clearing',
                        'creditAmount': 500,
                        'debitAmount': 0,
                        'balance': 2840494.62
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Md. Sazzad Hasan AC/No. 14715161375 of DUTCH-BANGLA BANK LTD (090260555) - 27767',
                        'transactionMode': 'Clearing',
                        'creditAmount': 50,
                        'debitAmount': 0,
                        'balance': 2840544.62
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Faisal Mahmud AC/No. 2101502152001 of THE CITY BANK LTD. (225264634) - 27740',
                        'transactionMode': 'Clearing',
                        'creditAmount': 1000,
                        'debitAmount': 0,
                        'balance': 2841544.62
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] Outward PPD Fund Trans to A Z M Fouz U AC/No. 18282473601 of STANDARD CHARTERED BANK (215261726) - 27742',
                        'transactionMode': 'Clearing',
                        'creditAmount': 100,
                        'debitAmount': 0,
                        'balance': 2841644.62
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Mafizur Rahman AC/No. 00734017345 of BANK ASIA LTD. (070276130) - 27752',
                        'transactionMode': 'Clearing',
                        'creditAmount': 100,
                        'debitAmount': 0,
                        'balance': 2841744.62
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Sk. Tanzeeb  AC/No. 5314010002440 of BASIC BANK LTD. (055264309) - 27771',
                        'transactionMode': 'Clearing',
                        'creditAmount': 300,
                        'debitAmount': 0,
                        'balance': 2842044.62
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Ventec Global AC/No. 0200009373068 of AGRANI BANK LTD. (010472381) - 27773',
                        'transactionMode': 'Clearing',
                        'creditAmount': 20,
                        'debitAmount': 0,
                        'balance': 2842064.62
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Darwin Khoksi AC/No. 112912119890294 of MERCANTILE BANK LTD. (140261725) - 27789',
                        'transactionMode': 'Clearing',
                        'creditAmount': 100,
                        'debitAmount': 0,
                        'balance': 2842164.62
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Md Salah AC/No. 0393100000458 of BANGLADESH COMMERCE BANK LTD. (030060373) - 27809',
                        'transactionMode': 'Clearing',
                        'creditAmount': 200,
                        'debitAmount': 0,
                        'balance': 2842364.62
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Md. Tare AC/No. 1101030042320 of DUTCH-BANGLA BANK LTD (090261183) - 27810',
                        'transactionMode': 'Clearing',
                        'creditAmount': 1700,
                        'debitAmount': 0,
                        'balance': 2844064.62
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Amitav Cha AC/No. 36090191871820 of EASTERN BANK LTD. (095260439) - 27811',
                        'transactionMode': 'Clearing',
                        'creditAmount': 500,
                        'debitAmount': 0,
                        'balance': 2844564.62
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Md Tushar AC/No. 12610177579 of DUTCH-BANGLA BANK LTD (090261338) - 27650',
                        'transactionMode': 'Clearing',
                        'creditAmount': 470,
                        'debitAmount': 0,
                        'balance': 2845034.62
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] Outward PPD Fund Trans to A.S.M Zulker  AC/No. 101103598302 of DUTCH-BANGLA BANK LTD (090273889) - 27739',
                        'transactionMode': 'Clearing',
                        'creditAmount': 55,
                        'debitAmount': 0,
                        'balance': 2845089.62
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Yousuf Al Azad AC/No. 1161010087811 of DUTCH-BANGLA BANK LTD (090261725) - 27786',
                        'transactionMode': 'Clearing',
                        'creditAmount': 99,
                        'debitAmount': 0,
                        'balance': 2845188.62
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To COMMERCIAL BANK OF CYLON PLC.  [05131000103]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.05,
                        'debitAmount': 0,
                        'balance': 2845188.67
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To BANGLADESH KRISHI BANK  [863476453246]  [R03 - No Account/Unable to Locate Account]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.87,
                        'debitAmount': 0,
                        'balance': 2845189.54
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To DHAKA BANK LTD.  [1085896257]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.86,
                        'debitAmount': 0,
                        'balance': 2845190.4
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To BRAC BANK LTD.  [73835963920]  [R03 - No Account/Unable to Locate Account]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.18,
                        'debitAmount': 0,
                        'balance': 2845190.58
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD iPAY SYSTE To DUTCH-BANGLA BANK LTD [3403710554] [R01 - Insufficient Funds]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 1010,
                        'balance': 2845140.58
                    },
                    'iPayTransactions': [
                        {
                            'id': 2572,
                            'accountId': '5822',
                            'creditAmount': null,
                            'debitAmount': 1010,
                            'bankAccountName': 'Bishwajit Purkaystha',
                            'bankAccountNumber': '3403710554',
                            'bankCode': '090',
                            'bankName': 'DUTCH-BANGLA BANK LTD',
                            'branchCode': '172',
                            'branchName': 'SREE MANGAL',
                            'requestTime': 1520322326766,
                            'serviceId': 3001,
                            'serviceName': 'Add Money',
                            'statusDescription': 'SUCCESS',
                            'transactionId': '68I5822-161FA45AFB4',
                            'purpose': 'Initiated by Ifta Khirul'
                        }
                    ],
                    'status': 'MATCHED',
                    'category': 'REVERTED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To DUTCH-BANGLA BANK LTD  [01623369398]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.56,
                        'debitAmount': 0,
                        'balance': 2845141.14
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To DUTCH-BANGLA BANK LTD  [101101233077]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.25,
                        'debitAmount': 0,
                        'balance': 2845141.39
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To AGRANI BANK LTD.  [123443211234]  [R03 - No Account/Unable to Locate Account]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.57,
                        'debitAmount': 0,
                        'balance': 2845142.31
                    },
                    'iPayTransactions': [
                        {
                            'id': 2562,
                            'accountId': '5822',
                            'creditAmount': 3675,
                            'debitAmount': null,
                            'bankAccountName': 'Bishwajit Purkaystha',
                            'bankAccountNumber': '3403710554',
                            'bankCode': '090',
                            'bankName': 'DUTCH-BANGLA BANK LTD',
                            'branchCode': '172',
                            'branchName': 'SREE MANGAL',
                            'requestTime': 1520305497938,
                            'serviceId': 3002,
                            'serviceName': 'Withdraw Money',
                            'statusDescription': 'SUCCESS',
                            'transactionId': '21I5822-161F944E5FC',
                            'purpose': null
                        }
                    ],
                    'status': 'MATCHED',
                    'category': 'FAILED',
                    'groupId': 2
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To AGRANI BANK LTD.  [61524634063]  [R03 - No Account/Unable to Locate Account]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.97,
                        'debitAmount': 0,
                        'balance': 2845143.28
                    },
                    'iPayTransactions': [
                        {
                            'id': 2545,
                            'accountId': '5822',
                            'creditAmount': 0.57,
                            'debitAmount': null,
                            'bankAccountName': 'Bishwajit Purkaystha',
                            'bankAccountNumber': '123443211234',
                            'bankCode': '010',
                            'bankName': 'AGRANI BANK LTD.',
                            'branchCode': '007',
                            'branchName': 'BAGERHAT',
                            'requestTime': 1520218203789,
                            'serviceId': 3002,
                            'serviceName': 'Withdraw Money',
                            'statusDescription': 'WAITING TO SEND TO BANK',
                            'transactionId': '70I5822-161F410E61E',
                            'purpose': null
                        }
                    ],
                    'status': 'MATCHED',
                    'category': 'FAILED',
                    'groupId': 1
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To AB BANK LTD.  [111213141516]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.3,
                        'debitAmount': 0,
                        'balance': 2845143.58
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To SHAHJALAL ISLAMI BANK LTD.  [401212100041471]  [R03 - No Account/Unable to Locate Account]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 1,
                        'debitAmount': 0,
                        'balance': 2845144.58
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To AGRANI BANK LTD.  [0200009373068]  [R03 - No Account/Unable to Locate Account]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 20,
                        'balance': 2845124.58
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To THE CITY BANK LTD.  [2101502152001]  [R01 - Insufficient Funds]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 1000,
                        'balance': 2844124.58
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To JANATA BANK LTD.  [0400002132128]  [R03 - No Account/Unable to Locate Account]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.16,
                        'debitAmount': 0,
                        'balance': 2844124.74
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To SONALI BANK LTD.  [4111133013859]  [R09 - Uncollected Funds]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 500,
                        'balance': 2843624.74
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To SONALI BANK LTD.  [4111133013859]  [R09 - Uncollected Funds]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 1500,
                        'balance': 2842124.74
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To SONALI BANK LTD.  [0000002136134]  [R09 - Uncollected Funds]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 2000,
                        'balance': 2840124.74
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': 'BFT:TRF TO 678998766789,\n232323232323,\n1234568085,\n3403710554\n',
                        'transactionMode': 'Transfer',
                        'creditAmount': 0,
                        'debitAmount': 2275.13,
                        'balance': 2797884.16
                    },
                    'iPayTransactions': [
                        {
                            'id': 2648,
                            'accountId': '5822',
                            'creditAmount': 11,
                            'debitAmount': null,
                            'bankAccountName': 'Bishwajit Purkaystha',
                            'bankAccountNumber': '678998766789',
                            'bankCode': '170',
                            'bankName': 'PRIME BANK LTD.',
                            'branchCode': '085',
                            'branchName': 'JAMALPUR',
                            'requestTime': 1521350710495,
                            'serviceId': 3002,
                            'serviceName': 'Withdraw Money',
                            'statusDescription': 'SENT TO BANK',
                            'transactionId': '41I5822-162379192A0',
                            'purpose': null
                        },
                        {
                            'id': 2637,
                            'accountId': '5822',
                            'creditAmount': 0.13,
                            'debitAmount': null,
                            'bankAccountName': 'Bishwajit Purkaystha',
                            'bankAccountNumber': '232323232323',
                            'bankCode': '010',
                            'bankName': 'AGRANI BANK LTD.',
                            'branchCode': '013',
                            'branchName': 'BABUR HAT',
                            'requestTime': 1521102151956,
                            'serviceId': 3002,
                            'serviceName': 'Withdraw Money',
                            'statusDescription': 'SENT TO BANK',
                            'transactionId': '19I5822-16228C0E076',
                            'purpose': 'Initiated by Zakaria Swapan'
                        },
                        {
                            'id': 2615,
                            'accountId': '178',
                            'creditAmount': 2000,
                            'debitAmount': null,
                            'bankAccountName': 'Md Shamim Seraj',
                            'bankAccountNumber': '1234568085',
                            'bankCode': '060',
                            'bankName': 'BRAC BANK LTD.',
                            'branchCode': '172',
                            'branchName': 'GULSHAN',
                            'requestTime': 1520995061752,
                            'serviceId': 3002,
                            'serviceName': 'Withdraw Money',
                            'statusDescription': 'SENT TO BANK',
                            'transactionId': '26I178-162225ECEB7',
                            'purpose': null
                        },
                        {
                            'id': 2650,
                            'accountId': '5822',
                            'creditAmount': 264,
                            'debitAmount': null,
                            'bankAccountName': 'Bishwajit Purkaystha',
                            'bankAccountNumber': '3403710554',
                            'bankCode': '090',
                            'bankName': 'DUTCH-BANGLA BANK LTD',
                            'branchCode': '172',
                            'branchName': 'SREE MANGAL',
                            'requestTime': 1521351906809,
                            'serviceId': 3002,
                            'serviceName': 'Withdraw Money',
                            'statusDescription': 'SENT TO BANK',
                            'transactionId': '74I5822-1622808BDFC',
                            'purpose': null
                        }
                    ],
                    'status': 'MATCHED',
                    'category': 'SUCCESSFUL',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': 'BFT:TRF TO 345665433456,\n3403710554,\n3403710554',
                        'transactionMode': 'Transfer',
                        'creditAmount': 0,
                        'debitAmount': 2185.26,
                        'balance': 2763483.91
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [BRAC BANK LTD.] [UTTARA BRANCH]  AC/No. 1510202376898 [ A.S.M Zulker Nayen] SL:111291 - 27850',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.15,
                        'balance': 2763483.76
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [EASTERN BANK LTD.] [PANCHLAISH BRANCH]  AC/No. 4685370874902357 [ Syed Ghalib Azharuddin] SL:111292 - 27826',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.73,
                        'balance': 2763483.03
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [THE CITY BANK LTD.] [TANGAIL BRANCH]  AC/No. 2801768727001 [ Code For Host, Inc] SL:111293 - 27830',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.72,
                        'balance': 2763482.31
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [SREE MANGAL BRANCH] AC/No. 3403710554 [ Bishwajit Purkaystha] SL:111294 - 2562',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 3675,
                        'balance': 2758482.31
                    },
                    'iPayTransactions': [
                        {
                            'id': 2562,
                            'accountId': '5822',
                            'creditAmount': 3675,
                            'debitAmount': null,
                            'bankAccountName': 'Bishwajit Purkaystha',
                            'bankAccountNumber': '3403710554',
                            'bankCode': '090',
                            'bankName': 'DUTCH-BANGLA BANK LTD',
                            'branchCode': '172',
                            'branchName': 'SREE MANGAL',
                            'requestTime': 1520305497938,
                            'serviceId': 3002,
                            'serviceName': 'Withdraw Money',
                            'statusDescription': 'SUCCESS',
                            'transactionId': '21I5822-161F944E5FC',
                            'purpose': null
                        }
                    ],
                    'status': 'MATCHED',
                    'category': 'FAILED',
                    'groupId': 2
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [FIRST SECURITY ISLAMI BANK LTD.] [FARIDPUR BRANCH]  AC/No. 016212900000002 [ M/S Hazera Enterprise] SL:111295 - 27833',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.51,
                        'balance': 2758481.8
                    },
                    'iPayTransactions': [
                        {
                            'id': 2545,
                            'accountId': '5822',
                            'creditAmount': 0.57,
                            'debitAmount': null,
                            'bankAccountName': 'Bishwajit Purkaystha',
                            'bankAccountNumber': '123443211234',
                            'bankCode': '010',
                            'bankName': 'AGRANI BANK LTD.',
                            'branchCode': '007',
                            'branchName': 'BAGERHAT',
                            'requestTime': 1520218203789,
                            'serviceId': 3002,
                            'serviceName': 'Withdraw Money',
                            'statusDescription': 'WAITING TO SEND TO BANK',
                            'transactionId': '70I5822-161F410E61E',
                            'purpose': null
                        }
                    ],
                    'status': 'MATCHED',
                    'category': 'FAILED',
                    'groupId': 1
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [MOTIJHEEL FOREIGN EXCHANGE BRANCH]  AC/No. 1051010109476 [ Razib Biswas] SL:111296 - 27834',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.24,
                        'balance': 2758481.56
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [PUBALI BANK LTD.] [CHUK NAGAR]  AC/No. 4518101011927 [ Md. Mosharraf Hossain] SL:111297 - 27836',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.34,
                        'balance': 2758481.22
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [ISLAMI BANK BANGLDESH LTD.] [CHUADANGA BRANCH]  AC/No. 2306700022614 [ MD. SHAMEUL ISLAM] SL:111299 - 27842',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 17600,
                        'balance': 2740881.22
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DHAKA BANK LTD.] [KAKRAIL]  AC/No. 1062000003694 [ H M MOSTAFIZ] SL:111300 - 27846',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.04,
                        'balance': 2740881.18
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [AB BANK LTD.] [SITAKUNDA BRANCH]  AC/No. 4109553783308 [ Shaon Dey] SL:111301 - 27847',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.56,
                        'balance': 2740880.62
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [THE CITY BANK LTD.] [HEAD OFFICE BRANCH]  AC/No. 376948000295132 [ Md Rashed U] SL:111302 - 27848',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.51,
                        'balance': 2740880.11
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [UNITED COMMERCIAL BANK LTD.] [AZADI BAZAR BRANCH]  AC/No. 1281140000672 [ Muhammad Arif] SL:111303 - 27849',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.93,
                        'balance': 2740879.18
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [LOCAL OFFICE BRANCH]  AC/No. 019771239896 [ Riyadh Hasna] SL:111305 - 27853',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.95,
                        'balance': 2740878.23
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [ISLAMI BANK BANGLDESH LTD.] [BARIDHARA BRANCH]  AC/No. 342670067507 [ ASIKUR RAHMAN] SL:111306 - 27854',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.39,
                        'balance': 2740877.84
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [DHANMONDI BRANCH]  AC/No. 171151115401 [ Kazi Reaz Rahman] SL:111308 - 27860',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.69,
                        'balance': 2740877.15
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [BRAC BANK LTD.] [MOGHBAZAR BRANCH]  AC/No. 1503102350734001 [ Mohin Uddin Bhuiyan] SL:111309 - 27861',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.86,
                        'balance': 2740876.29
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [STANDARD CHARTERED BANK] [GULSHAN NORTH BRANCH]  AC/No. 24125450501 [ Ashiqul Islam] SL:111310 - 27862',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 4500,
                        'balance': 2736376.29
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [BANGLADESH KRISHI BANK] [PANCHARI BRANCH]  AC/No. 122888746690 [ Arefin Sishir] SL:111311 - 27864',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.73,
                        'balance': 2736375.56
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [EASTERN BANK LTD.] [MADHABDI SME BRANCH]  AC/No. 1801330033444 [ Md Mehedi Hasann] SL:111312 - 27866',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.05,
                        'balance': 2736375.51
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [MIRPUR BRANCH]  AC/No. 1151511877 [ md al emran eman] SL:111313 - 27867',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.16,
                        'balance': 2736375.35
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [THE PREMIER BANK LTD.] [RANGPUR BRANCH]  AC/No. 011100000560 [ FoodID] SL:111314 - 27868',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.82,
                        'balance': 2736374.53
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [STANDARD BANK LTD.] [UTTARA MODEL TOWN BRANCH]  AC/No. 1534004833 [ saddam mege] SL:111315 - 27869',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.86,
                        'balance': 2736373.67
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [STANDARD BANK LTD.] [UTTARA MODEL TOWN BRANCH]  AC/No. 1534004833 [ saddam mege] SL:111316 - 27871',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.61,
                        'balance': 2736373.06
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [RING ROAD BRANCH]  AC/No. 14810157075 [ Ahsan Habib Khan] SL:111318 - 27873',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.49,
                        'balance': 2736372.57
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [SOUTHEAST BANK LTD.] [SARULIA BRANCH]  AC/No. 008512100000684 [ Sajjad Hossain] SL:111319 - 27874',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.11,
                        'balance': 2736372.46
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [THE CITY BANK LTD.] [BANANI BRANCH]  AC/No. 2181795003001 [ Md Nazmul Haque] SL:111321 - 27886',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 9000,
                        'balance': 2727372.46
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [COX\'S BAZAR BRANCH]  AC/No. 1451012003 [ Imrul Ahsan] SL:111322 - 27887',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.19,
                        'balance': 2727372.27
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [KURIGRAM]  AC/No. 26215149843 [ Md Atikur Rahman] SL:111324 - 27889',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.45,
                        'balance': 2727371.82
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [BANGLADESH DEVELOPMENT BANK LTD.] [COX\'S BAZAR BRANCH]  AC/No. 108523799854 [ Arefin Sishir] SL:111325 - 27891',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.06,
                        'balance': 2727371.76
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [UNITED COMMERCIAL BANK LTD.] [GULSHAN AVENUE BRANCH]  AC/No. 0953202000016814 [ G. R. Chist] SL:111326 - 27892',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 1,
                        'balance': 2727370.76
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [BRAC BANK LTD.] [GULSHAN BRANCH]  AC/No. 1501101739491001 [ Sanjoy Chakraborty] SL:111327 - 27893',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.26,
                        'balance': 2727370.5
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [AGRANI BANK LTD.] [SHERPUR BRANCH]  AC/No. 1284072453 [ Rakib] SL:111328 - 27894',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.59,
                        'balance': 2727369.91
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [STANDARD CHARTERED BANK] [GULSHAN BRANCH]  AC/No. 18117082601 [ Nabil Ahmed Lipon] SL:111329 - 27897',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.82,
                        'balance': 2727369.09
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [MIRPUR SECTION-10 BRANCH]  AC/No. 16411024270 [ Deshi E-Shop] SL:111331 - 27900',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.76,
                        'balance': 2727368.33
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [ISLAMI BANK BANGLDESH LTD.] [KADAMTALI]  AC/No. 5656552358 [ Saidur Rahman ] SL:111332 - 27901',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.35,
                        'balance': 2727367.98
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [PRIME BANK LTD.] [AGRABAD BRANCH]  AC/No. 12021040030435 [ Rajibul Hasan ] SL:111333 - 27859',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.83,
                        'balance': 2727367.15
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [BRAC BANK LTD.] [MOGHBAZAR BRANCH]  AC/No. 1503102350734001 [ Mohin Uddin Bh] SL:111334 - 27865',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 1,
                        'balance': 2727366.15
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [EASTERN BANK LTD.] [GULSHAN BRANCH]  AC/No. 1041070301646 [ M/S. Amali Expo] SL:111335 - 27827',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.25,
                        'balance': 2727365.9
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [SATMASJID ROAD BRANCH]  AC/No. 1711010143630 [ Nurul Huda Robin] SL:111336 - 27828',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 30000,
                        'balance': 2697365.9
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [THE CITY BANK LTD.] [KHULNA BRANCH]  AC/No. 2801516350001 [ Md Shahria] SL:111337 - 27835',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.19,
                        'balance': 2697365.71
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [DHANMONDI BRANCH]  AC/No. 11011019150 [ Nanarokom.com] SL:111338 - 27870',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.34,
                        'balance': 2697365.37
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [LAKSHMIPUR BRANCH]  AC/No. 2091011020 [ Md. Humayun] SL:111339 - 27876',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.4,
                        'balance': 2697364.97
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [MERCANTILE BANK LTD.] [BAIPAIL BRANCH]  AC/No. 111561023742153 [ Md.anwar Hossain] SL:111340 - 27904',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.02,
                        'balance': 2697364.95
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [EASTERN BANK LTD.] [BANANI BRANCH]  AC/No. 1091260131325 [ Mahabubur ] SL:111341 - 27905',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 8500,
                        'balance': 2688864.95
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [BANK ASIA LTD.] [AGRABAD BRANCH]  AC/No. 00534016298 [ Arif Ahmed] SL:111342 - 27907',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.94,
                        'balance': 2688864.01
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [STANDARD CHARTERED BANK] [RTGS-INTERBANK LOCAL CURRENCY TRANSACTIONS]  AC/No. 18350177901 [ Abdullah Al ] SL:111343 - 27908',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.9,
                        'balance': 2688863.11
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [JESSORE BRANCH]  AC/No. 1631518957 [ Manash Saha] SL:111344 - 27910',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.51,
                        'balance': 2688862.6
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DHAKA BANK LTD.] [BANGSHAL BRANCH]  AC/No. 21020024138 [ Saiful Islam] SL:111345 - 27885',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.99,
                        'balance': 2688861.61
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [MERCANTILE BANK LTD.] [GULSHAN BRANCH]  AC/No. 112912116826487 [ Anindita Trisha] SL:111346 - 27890',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 8000,
                        'balance': 2680861.61
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [MERCANTILE BANK LTD.] [GULSHAN BRANCH]  AC/No. 112912123110554 [ Khan Tanjeel Ahmed] SL:111347 - 27902',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 8000,
                        'balance': 2672861.61
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [GULSHAN BRANCH]  AC/No. 136101152290 [ Md.Romjan Ali] SL:111348 - 27906',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.29,
                        'balance': 2672861.32
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [AB BANK LTD.] [BOGRA BRANCH]  AC/No. 1535458765235 [ shuvok ku] SL:111349 - 27914',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.4,
                        'balance': 2672860.92
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [THE CITY BANK LTD.] [AGRABAD BRANCH]  AC/No. 1401324103001 [ Meghdoot] SL:111350 - 27915',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.58,
                        'balance': 2672860.34
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [STATE BANK OF INDIA] [CHITTAGONG BRANCH]  AC/No. 35716198840 [ Abdul Rasid] SL:111351 - 27932',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.94,
                        'balance': 2672859.4
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [KARWAN BAZAR BRANCH]  AC/No. 1071050089233 [ Ata E Rabby] SL:111352 - 27933',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.01,
                        'balance': 2672859.39
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [AB BANK LTD.] [BANANI BRANCH]  AC/No. 4033662788308 [ Mayel Mostafa] SL:111353 - 27962',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.43,
                        'balance': 2672858.96
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [AL-ARAFAH ISLAMI BANK LTD.] [SHIBERHAT]  AC/No. 9901080033591 [ NIROB FASHION] SL:111354 - 27963',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.87,
                        'balance': 2672858.09
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [BANK ASIA LTD.] [BANK ASIA BHABAN BRANCH]  AC/No. 1083315000037 [ NIROB FASHION] SL:111355 - 27965',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.66,
                        'balance': 2672857.43
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [ISLAMI BANK BANGLDESH LTD.] [CHAWK BAZAR BRANCH]  AC/No. 1620204681502 [ Dr.Sakhawat ] SL:111356 - 27966',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.99,
                        'balance': 2672856.44
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [ISLAMI BANK BANGLDESH LTD.] [SREENAGAR BRANCH]  AC/No. 3990200102214 [ shohidul islam] SL:111357 - 27990',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.94,
                        'balance': 2672855.5
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DHAKA BANK LTD.] [FANTASY KINGDOM BRANCH]  AC/No. 21320048571 [ AFRANA AHMED] SL:111358 - 27991',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.24,
                        'balance': 2672855.26
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [SONALI BANK LTD.] [KAMALNAGAR BRANCH]  AC/No. 39073100008126 [ Md.Shaleh Uddin] SL:111362 - 27998',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.4,
                        'balance': 2672854.86
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [STANDARD CHARTERED BANK] [DHANMONDI(ROAD-5) BRANCH]  AC/No. 24117610901 [ Md Rabiul Hasan] SL:111363 - 28002',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.91,
                        'balance': 2672853.95
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [MADARIPUR BRANCH]  AC/No. 18115160134 [ M. Morshed Kamal] SL:111364 - 28005',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.72,
                        'balance': 2672853.23
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [SHAHJALAL UPASHSHAR BRANCH]  AC/No. 19010186242 [ A.K.M. FAZL] SL:111365 - 28007',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.03,
                        'balance': 2672853.2
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [SBAC BANK LIMITED] [MOTIJHEEL]  AC/No. 0039120004329 [ MD Washim ] SL:111368 - 28032',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.39,
                        'balance': 2672852.81
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [SOUTHEAST BANK LTD.] [JOYDEBPUR BRANCH]  AC/No. 00012100003180 [ Azharul Islam] SL:111369 - 28033',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.44,
                        'balance': 2672852.37
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [ISLAMI BANK BANGLDESH LTD.] [PATUAKHALI BRANCH]  AC/No. 19201355803 [ Md Abul Hasan] SL:111370 - 28034',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.15,
                        'balance': 2672852.22
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [ISLAMI BANK BANGLDESH LTD.] [GULSHAN BRANCH]  AC/No. 1770203491203 [ Md Khaled Hassa] SL:111371 - 28041',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 485,
                        'balance': 2672367.22
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [LOCAL OFFICE BRANCH]  AC/No. 1011020011326 [ Md Nazamul] SL:111372 - 28043',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.96,
                        'balance': 2672366.26
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [MUTUAL TRUST BANK LTD.] [PANTHA PATH BRANCH]  AC/No. 00030310053730 [ S M Masukur] SL:111375 - 28046',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.06,
                        'balance': 2672366.2
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [EASTERN BANK LTD.] [GULSHAN NORTH]  AC/No. 1041260286154 [ Sudipto Das] SL:111377 - 28048',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 3500,
                        'balance': 2668866.2
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [IFIC BANK LTD.] [MIRPUR BRANCH]  AC/No. 1013720763031 [ Aaronnok.com] SL:111378 - 28049',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.63,
                        'balance': 2668865.57
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [MONOHARDI BRANCH]  AC/No. 2355020001062 [ MD SHEIK FO] SL:111379 - 28050',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.86,
                        'balance': 2668864.71
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [TRUST BANK LTD.] [MOULAVI BAZAR BRANCH]  AC/No. 00260214009928 [ Masud Parvez] SL:111380 - 28053',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 1500,
                        'balance': 2667364.71
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [The Farmers Bank Limited] [Gulshan Corporate BRANCH]  AC/No. 0112100013434 [ SHAH A. N. M] SL:111382 - 28055',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.21,
                        'balance': 2667364.5
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [BRAC BANK LTD.] [GULSHAN BRANCH]  AC/No. 1511101524658001 [ Md Akibul Islam] SL:111383 - 28056',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.94,
                        'balance': 2667363.56
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [RAJSHAHI BRANCH]  AC/No. 13510150687 [ Atik Khan] SL:111384 - 28058',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.8,
                        'balance': 2667362.76
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [SHAFIPUR SME BRANCH]  AC/No. 1821510041827 [ Md. Shafiul Azam] SL:111385 - 28060',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.32,
                        'balance': 2667362.44
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [CITI BANK N A] [CHITTAGONG BRANCH]  AC/No. 1942801922877001 [ Md. Imtiaj Uddin] SL:111386 - 28062',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.62,
                        'balance': 2667361.82
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [PRIME BANK LTD.] [BASHUNDHARA BRANCH]  AC/No. 16521010017990 [ Md .Abdul Bari] SL:111387 - 28066',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 2000,
                        'balance': 2665361.82
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [ISLAMI BANK BANGLDESH LTD.] [MIRPUR BRANCH]  AC/No. 131020758041 [ ABU HENA MD] SL:111388 - 28068',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 9000,
                        'balance': 2656361.82
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [AGRABAD BRANCH]  AC/No. 1021010290894 [ Md Nasim aAkte] SL:111389 - 28070',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.78,
                        'balance': 2656361.04
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [TRUST BANK LTD.] [KHAGRACHARI BRANCH]  AC/No. 0630310000106 [ Md Nasim Akter] SL:111390 - 28072',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.07,
                        'balance': 2656360.97
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [RUPALI BANK LTD.] [NETROKONA BRANCH]  AC/No. 2569882386 [ Nazrul islam] SL:111392 - 28078',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.12,
                        'balance': 2656360.85
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [BRAC BANK LTD.] [ASAD GATE BRANCH]  AC/No. 1506202655021001 [ Rashed Mahmud] SL:111393 - 28081',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.58,
                        'balance': 2656360.27
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [RING ROAD BRANCH]  AC/No. 017901356788 [ Rashed Mahmud] SL:111394 - 28082',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.85,
                        'balance': 2656359.42
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [PALLABI BRANCH]  AC/No. 21111016649 [ Magic Ruti Maker] SL:111395 - 28083',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.2,
                        'balance': 2656359.22
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [MERCANTILE BANK LTD.] [GULSHAN BRANCH]  AC/No. 112912117518584 [ SUBREENA ] SL:111396 - 28086',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 5000,
                        'balance': 2651359.22
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [PRIME BANK LTD.] [ADAMJEE EPZ BRANCH]  AC/No. 16721010028680 [ Md Arsadur] SL:111398 - 28094',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.32,
                        'balance': 2651358.9
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [ELEPHANT ROAD BRANCH]  AC/No. 1261050217142 [ saeid hasan] SL:111399 - 28095',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.74,
                        'balance': 2651358.16
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [RING ROAD BRANCH]  AC/No. 1481050169418 [ A A M Al Jak] SL:111400 - 28096',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.98,
                        'balance': 2651357.18
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [BARISAL BRANCH]  AC/No. 395945541268419 [ RK RASEL KHAN] SL:111401 - 28098',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.17,
                        'balance': 2651357.01
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [BANK ASIA LTD.] [SATMASJID ROAD BRANCH]  AC/No. 06933000669 [ Bongo Jatra] SL:111402 - 28100',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.68,
                        'balance': 2651356.33
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [BANK ASIA LTD.] [SATMASJID ROAD BRANCH]  AC/No. 0693300394 [ TRAVELZOO.] SL:111403 - 28101',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.04,
                        'balance': 2651356.29
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [TANGAIL BRANCH]  AC/No. 017838328329 [ Arifu Islam] SL:111404 - 27916',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.01,
                        'balance': 2651356.28
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [SONALI BANK LTD.] [DAULATPUR BRANCH]  AC/No. 4503100006890 [ Md. Abu Nayem] SL:111405 - 27917',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.55,
                        'balance': 2651355.73
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [UNITED COMMERCIAL BANK LTD.] [DHANMONDI BRANCH]  AC/No. 0843204000003037 [ Saif Islam] SL:111406 - 27918',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.92,
                        'balance': 2651354.81
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [HEMAYET PUR BRANCH]  AC/No. 2231510049508 [ prosonjit] SL:111407 - 27919',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.1,
                        'balance': 2651354.71
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [BRAC BANK LTD.] [GULSHAN BRANCH]  AC/No. 1501102755139001 [ Md. Zakir Ho] SL:111408 - 27920',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 31000,
                        'balance': 2620354.71
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [KHULNA BRANCH]  AC/No. 1201050015525 [ MD AMMAN ] SL:111409 - 27921',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.69,
                        'balance': 2620354.02
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [AB BANK LTD.] [GULSHAN BRANCH]  AC/No. 4019467176300 [ Maksudur ] SL:111410 - 27922',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.32,
                        'balance': 2620353.7
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [IFIC BANK LTD.] [UTTARA BRANCH]  AC/No. 1024055374031 [ Newton Mutsudhi] SL:111412 - 27926',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.4,
                        'balance': 2620353.3
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [SONALI BANK LTD.] [SARKER BAZAR BRANCH]  AC/No. 0034027176 [ Saifur Rahman] SL:111413 - 27927',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.04,
                        'balance': 2620353.26
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [JAMALPUR BRANCH]  AC/No. 20610530597 [ Rifat Hossain] SL:111414 - 27928',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.32,
                        'balance': 2620352.94
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [BASHUNDHARA BRANCH]  AC/No. 147151104730 [ Md.Arifur Rahman] SL:111417 - 27935',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.99,
                        'balance': 2620351.95
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [JANATA BANK LTD.] [FOREIGN EXCHANGE CORPORATE BRANCH]  AC/No. 0100043752248 [ Md. Mostafizur  ] SL:111418 - 27936',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.92,
                        'balance': 2620351.03
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [RING ROAD BRANCH]  AC/No. 148101138699 [ Md. Mostafizur ] SL:111419 - 27937',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.81,
                        'balance': 2620350.22
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [EASTERN BANK LTD.] [GULSHAN BRANCH]  AC/No. 546008786311301 [ Shafat shams] SL:111420 - 27939',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.18,
                        'balance': 2620350.04
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [MUTUAL TRUST BANK LTD.] [JOYPURHAT BRANCH]  AC/No. 00310481000201 [ Mridul Kume] SL:111421 - 27942',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.17,
                        'balance': 2620349.87
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [AGRANI BANK LTD.] [FARIDPUR BRANCH]  AC/No. 0034041479 [ Abdul Alim Miah] SL:111422 - 27943',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.19,
                        'balance': 2620349.68
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [EASTERN BANK LTD.] [FARIDPUR BRANCH]  AC/No. 489340653749761 [ SUBIR KUMAR ] SL:111423 - 27944',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.32,
                        'balance': 2620349.36
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [FARIDPUR BRANCH]  AC/No. 7017015343847 [ SUBIR KUMAR ] SL:111424 - 27945',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.96,
                        'balance': 2620348.4
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [HALISHAHAR BRANCH]  AC/No. 165101139614 [ Mahidul Islam Nakib] SL:111426 - 27947',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.15,
                        'balance': 2620348.25
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [STANDARD BANK LTD.] [DINAJPUR BRANCH]  AC/No. 21534000949 [ Momin islam sojeeb] SL:111427 - 27949',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.59,
                        'balance': 2620347.66
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [GULSHAN BRANCH]  AC/No. 7017012886665 [ Arif Mahmood] SL:111428 - 27953',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.31,
                        'balance': 2620347.35
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [TRUST BANK LTD.] [PANGSHA]  AC/No. 0214032228 [ Mrittunjoy Dash] SL:111429 - 27954',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.56,
                        'balance': 2620346.79
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [SOUTHEAST BANK LTD.] [CORPORATE BRANCH]  AC/No. 12200001285 [ Md. Nazib Ul Hoque] SL:111430 - 27957',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.99,
                        'balance': 2620345.8
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [EASTERN BANK LTD.] [SONARGAON ROAD BRANCH]  AC/No. 1051450153214 [ zeker uddin samrat] SL:111433 - 27967',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.14,
                        'balance': 2620345.66
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [NOAKHALI BRANCH]  AC/No. 25015168086 [ Mohammad basher] SL:111434 - 27970',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.31,
                        'balance': 2620345.35
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [ISLAMI BANK BANGLDESH LTD.] [BIRAMPUR BRANCH]  AC/No. 7250521524 [ Millat Hosen] SL:111438 - 27977',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.45,
                        'balance': 2620344.9
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [TRUNCATION POINT BRANCH]  AC/No. 110101252420 [ Saifur] SL:111439 - 27978',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.29,
                        'balance': 2620344.61
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [EXIM BANK LTD.] [KERANIGANJ SME BRANCH]  AC/No. 1122334455 [ sajid hazi] SL:111440 - 27981',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.13,
                        'balance': 2620344.48
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [NRB BANK] [SYLHET(MAIN)]  AC/No. 254252365233 [ Nabil Ahmed] SL:111441 - 27982',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.56,
                        'balance': 2620343.92
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [AB BANK LTD.] [GULSHAN BRANCH]  AC/No. 4019735709300 [ Md Jahirul Islam] SL:111442 - 27983',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.4,
                        'balance': 2620343.52
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [UNITED COMMERCIAL BANK LTD.] [JHENAIDAH BRANCH]  AC/No. 0453206000020841 [ Md. Washim ] SL:111444 - 27989',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.77,
                        'balance': 2620342.75
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [PRIME BANK LTD.] [ASHULIA BRANCH]  AC/No. 15721030047885 [ Shahriar B] SL:111445 - 27994',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 4950,
                        'balance': 2615392.75
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [EASTERN BANK LTD.] [UTTARA MODEL TOWN BRANCH]  AC/No. 4893401608006682 [ RAJUAN ISLAM] SL:111446 - 28008',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.89,
                        'balance': 2615391.86
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [AL-ARAFAH ISLAMI BANK LTD.] [MOHAKHALI BRANCH]  AC/No. 1261130000138 [ MD MEHDI ] SL:111447 - 28010',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.52,
                        'balance': 2615391.34
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [MUTUAL TRUST BANK LTD.] [CARD DIVISION BRANCH]  AC/No. 4622410100032342 [ MD MEHDI H] SL:111448 - 28012',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.46,
                        'balance': 2615390.88
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [THE CITY BANK LTD.] [TRUNCATION POINT BRANCH]  AC/No. 376947100678356 [ MD MEHDI ] SL:111449 - 28013',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.32,
                        'balance': 2615390.56
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [ONE BANK LTD.] [TRUNCATION POINT BRANCH]  AC/No. 4766130016551310 [ MD MEHDI] SL:111450 - 28014',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.87,
                        'balance': 2615389.69
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [NETROKONA]  AC/No. 2411510001937 [ Mahmud Simanto] SL:111451 - 28017',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.03,
                        'balance': 2615389.66
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [NETROKONA]  AC/No. 7017011997334 [ Mahmud Simanto] SL:111452 - 28018',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.28,
                        'balance': 2615389.38
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [BANGLADESH KRISHI BANK] [SATKHIRA BRANCH]  AC/No. 0000018485 [ Online shop ] SL:111453 - 28019',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.35,
                        'balance': 2615389.03
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [SOUTHEAST BANK LTD.] [ROKEYA SHARANI BRANCH]  AC/No. 006411100000326 [ Mukul Chandra] SL:111454 - 28020',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.19,
                        'balance': 2615388.84
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [THE CITY BANK LTD.] [FOREIGN EXCHANGE BRANCH]  AC/No. 2101377873001 [ MD IFTEER ] SL:111455 - 28021',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.36,
                        'balance': 2615388.48
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [AL-ARAFAH ISLAMI BANK LTD.] [ISLAMPUR BRANCH]  AC/No. 1122336655 [ sajid gazi] SL:111456 - 28023',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.4,
                        'balance': 2615388.08
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [IFIC BANK LTD.] [PORADAH BRANCH]  AC/No. 4169606957001 [ Md. Sohrab ] SL:111457 - 28028',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.75,
                        'balance': 2615387.33
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [JAMUNA BANK LTD.] [CHANDPUR]  AC/No. 01040310011961 [ MD. ROMEN ] SL:111458 - 28029',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.22,
                        'balance': 2615387.11
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [ISLAMI BANK BANGLDESH LTD.] [MIRPUR BRANCH]  AC/No. 1310207587405 [ SHAHRIAR] SL:111460 - 28057',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.89,
                        'balance': 2615386.22
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [ONE BANK LTD.] [HALISHAHAR BRANCH]  AC/No. 0632050015017 [ Md. Imtiaj Uddin] SL:111461 - 28067',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.34,
                        'balance': 2615385.88
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [AGRABAD BRANCH]  AC/No. 1021010072216 [ ABU HENA MD] SL:111462 - 28069',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.54,
                        'balance': 2615385.34
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [Chandpur Branch]  AC/No. 019439838984 [ Akash] SL:111463 - 28075',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.22,
                        'balance': 2615385.12
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [BANK ASIA LTD.] [MCB DILKUSHA BRANCH]  AC/No. 0083401300 [ Arnab Saha] SL:111464 - 28085',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.9,
                        'balance': 2615384.22
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [PANCHAGARH BRANCH]  AC/No. 70170121900229 [ Minhajul] SL:111465 - 28093',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.57,
                        'balance': 2615383.65
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [EASTERN BANK LTD.] [SATMASJID ROAD BRANCH]  AC/No. 1081070135400 [ TRAVE] SL:111466 - 28099',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.95,
                        'balance': 2615382.7
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [THE CITY BANK LTD.] [NEW MARKET BRANCH]  AC/No. 1401926692001 [ Shamsis Prii] SL:111467 - 28102',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.9,
                        'balance': 2615381.8
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [Chandpur Branch]  AC/No. 24215123598 [ S M Jahidul Islam] SL:111468 - 28103',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.75,
                        'balance': 2615381.05
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518285600000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [MOHAKHALI BRANCH]  AC/No. 1141010205622 [ MD JAVED H] SL:111469 - 28104',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.65,
                        'balance': 2615380.4
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To NATIONAL BANK OF PAKISTAN  [7033376762]  [R03 - No Account/Unable to Locate Account]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.99,
                        'debitAmount': 0,
                        'balance': 2615381.39
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To SOCIAL ISLAMI BANK LTD  [771340025743]  [R03 - No Account/Unable to Locate Account]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.36,
                        'debitAmount': 0,
                        'balance': 2615381.75
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To EASTERN BANK LTD.  [36090191871820]  []',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 500,
                        'balance': 2614881.75
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To AGRANI BANK LTD.  [0554553680]  [R03 - No Account/Unable to Locate Account]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.46,
                        'debitAmount': 0,
                        'balance': 2614882.21
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To AGRANI BANK LTD.  [01984148535]  [R03 - No Account/Unable to Locate Account]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.4,
                        'debitAmount': 0,
                        'balance': 2614882.61
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To AGRANI BANK LTD.  [0173777405455585]  [R03 - No Account/Unable to Locate Account]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.97,
                        'debitAmount': 0,
                        'balance': 2614883.58
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] ICE Trans. CIE from [BRAC BANK LTD.] [TRUNCATION POINT BRANCH]  AC/No.  [ EFT RTN] SL:111663',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.71,
                        'debitAmount': 0,
                        'balance': 2614884.29
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] ICE Trans. CIE from [BRAC BANK LTD.] [TRUNCATION POINT BRANCH]  AC/No.  [ EFT RTN] SL:111664',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.51,
                        'debitAmount': 0,
                        'balance': 2614884.8
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': 'BFT:TRF TO 011131100001017',
                        'transactionMode': 'Transfer',
                        'creditAmount': 0,
                        'debitAmount': 0.78,
                        'balance': 2614884.02
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [THE CITY BANK LTD.] [SADARGHAT BRANCH]  AC/No. 1401956314001 [ Ahsan Ullah] SL:111763 - 28165',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.09,
                        'balance': 2614883.93
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [AB BANK LTD.] [BARISAL BRANCH]  AC/No. 50288587075 [ Biswajit Maity] SL:111765 - 28108',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.71,
                        'balance': 2614883.22
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [CHOUMOHANI BRANCH]  AC/No. 15215184212 [ Apratim Bhuiyan] SL:111767 - 28109',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.84,
                        'balance': 2614882.38
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [THE CITY BANK LTD.] [FOREIGN EXCHANGE BRANCH]  AC/No. 2591690199001 [ Shoeb Mahmud Riyad] SL:111768 - 28112',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.14,
                        'balance': 2614882.24
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [AB BANK LTD.] [AGRABAD BRANCH]  AC/No. 4101287179300 [ SHAHNUR MD CHOWD] SL:111769 - 28115',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.86,
                        'balance': 2614881.38
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [BANK ASIA LTD.] [BHATIARY BRANCH]  AC/No. 50411002384 [ SHAHNUR MD CHOWD] SL:111770 - 28116',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.12,
                        'balance': 2614881.26
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [THE CITY BANK LTD.] [O.R. NIZAM ROAD BRANCH]  AC/No. 2401101093001 [ SHAHNUR MD CHOWD] SL:111771 - 28117',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.18,
                        'balance': 2614881.08
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [AGRABAD BRANCH]  AC/No. 10210169171 [ SHAHNUR MD CHOWD] SL:111772 - 28118',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.41,
                        'balance': 2614880.67
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [EASTERN BANK LTD.] [HALISHAHAR BRANCH]  AC/No. 0131450062942 [ SHAHNUR MD CHOWD] SL:111773 - 28119',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.35,
                        'balance': 2614880.32
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [MUTUAL TRUST BANK LTD.] [ALANKAR MOR BRANCH]  AC/No. 0450430002479 [ SHAHNUR MD CHOWD] SL:111774 - 28120',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.08,
                        'balance': 2614880.24
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [SOUTHEAST BANK LTD.] [C.D.A. AVENUE(ISLAMI BANKING) BRANCH]  AC/No. 0028121000246 [ SHAHNUR MD CHOWD] SL:111775 - 28121',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.26,
                        'balance': 2614879.98
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [NATIONAL CREDIT & COMMERCE BANK LTD.] [BARISAL BRANCH]  AC/No. 00840310005857 [ SHARIFUL ISLAM] SL:111777 - 28123',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.29,
                        'balance': 2614879.69
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [STANDARD CHARTERED BANK] [GULSHAN BRANCH]  AC/No. 24308374801 [ Md Rashed U] SL:111778 - 28124',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 10000,
                        'balance': 2604879.69
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [ISLAMI BANK BANGLDESH LTD.] [MIARHAT BRANCH]  AC/No. 2816700046506 [ Mushahid Hoss] SL:111779 - 28127',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 10000,
                        'balance': 2594879.69
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [AL-ARAFAH ISLAMI BANK LTD.] [KHULNA BRANCH]  AC/No. 0061120100023 [ A M D Manik] SL:111780 - 28129',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.42,
                        'balance': 2594879.27
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [NETROKONA]  AC/No. 7017011997334 [ Mahmud Simanto] SL:111781 - 28130',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.47,
                        'balance': 2594878.8
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [HATHAZARI BRANCH]  AC/No. 1131020001000 [ Md Abu Baker ] SL:111782 - 28133',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.54,
                        'balance': 2594878.26
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [BANDURA BRANCH]  AC/No. 1601053192 [ Shuvashish Pau] SL:111783 - 28135',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.65,
                        'balance': 2594877.61
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [BANK ASIA LTD.] [RUPSHA]  AC/No. 60234000640 [ Rasel Islam Rubel] SL:111784 - 28137',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.59,
                        'balance': 2594877.02
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [AGRANI BANK LTD.] [FOREIGN EXCHANGE BRANCH]  AC/No. 1051510027256 [ Hussain M Elius] SL:111785 - 28138',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.15,
                        'balance': 2594876.87
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [MIRPUR SECTION-10 BRANCH]  AC/No. 1641510353860 [ MD. SIFUL ISLAM] SL:111786 - 28140',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.2,
                        'balance': 2594876.67
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [NAYA BAZAR BRANCH]  AC/No. 012385378997 [ Mobile HUT] SL:111788 - 28143',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.27,
                        'balance': 2594876.4
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [AGRABAD BRANCH]  AC/No. 1021510060078 [ Kohinoor Begum] SL:111789 - 28144',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.69,
                        'balance': 2594875.71
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [NAYA BAZAR BRANCH]  AC/No. 13615156545 [ Mobile HUT] SL:111790 - 28145',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.68,
                        'balance': 2594875.03
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [RAJSHAHI BRANCH]  AC/No. 1351010041184 [ Delwar Hussain] SL:111791 - 28148',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.22,
                        'balance': 2594874.81
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [ISLAMI BANK BANGLDESH LTD.] [IDB BHABAN BRANCH]  AC/No. 2240201178518 [ Delwar Hussain] SL:111792 - 28149',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 1,
                        'balance': 2594873.81
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [BRAC BANK LTD.] [BANANI BRANCH]  AC/No. 1507201710451001 [ Khandakar Arafat] SL:111793 - 28154',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.8,
                        'balance': 2594873.01
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [BANGLADESH KRISHI BANK] [BAISHARI BRANCH]  AC/No. 0853695568 [ Santo Islam] SL:111794 - 28156',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.34,
                        'balance': 2594872.67
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [STANDARD CHARTERED BANK] [GULSHAN NORTH BRANCH]  AC/No. 24125433801 [ Md Saiful Alam ] SL:111795 - 28158',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 2500,
                        'balance': 2592372.67
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [GULSHAN BRANCH]  AC/No. 2461510016358 [ Sanjida Islam Nishi] SL:111796 - 28160',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 5000,
                        'balance': 2587372.67
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [SONALI BANK LTD.] [PRIME MINISTER\'S OFFICE BRANCH]  AC/No. 0010734017892 [ Md. Shahidul Islam] SL:111797 - 28162',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.9,
                        'balance': 2587371.77
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [BIJOY NAGAR BRANCH]  AC/No. 19115114699 [ Md. Jasim Uddin] SL:111799 - 28166',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.11,
                        'balance': 2587371.66
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [UNITED COMMERCIAL BANK LTD.] [DHANMONDI BRANCH]  AC/No. 0843204000003015 [ Md Rezaul Karim] SL:111800 - 28169',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 1000,
                        'balance': 2586371.66
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [STANDARD CHARTERED BANK] [GULSHAN BRANCH]  AC/No. 18131167901 [ Saiful Islam] SL:111801 - 28106',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.67,
                        'balance': 2586370.99
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [IFIC BANK LTD.] [KARWAN BAZAR BRANCH]  AC/No. 1017692264031 [ Rafiqul Islam] SL:111802 - 28107',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 35000,
                        'balance': 2551370.99
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [DUTCH-BANGLA BANK LTD] [NETROKONA]  AC/No. 2411510001937 [ Mahmud Simanto] SL:111803 - 28132',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.46,
                        'balance': 2551370.53
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [STANDARD CHARTERED BANK] [MOTIJHEEL BRANCH]  AC/No. 18751345301 [ Munaz Ahmed ] SL:111804 - 28147',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.26,
                        'balance': 2551370.27
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [BRAC BANK LTD.] [ELEPHANT ROAD BRANCH]  AC/No. 1535103534815001 [ Airtime Asia] SL:111805 - 28150',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.29,
                        'balance': 2551369.98
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [ISLAMI BANK BANGLDESH LTD.] [PANTHA PATH BRANCH]  AC/No. 2900100065211 [ Ritzy Outfits] SL:111807 - 28176',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.8,
                        'balance': 2551369.18
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [SONALI BANK LTD.] [K.D. MORE BRANCH]  AC/No. 09101008410 [ Rofiqul Islam] SL:111808 - 28153',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.1,
                        'balance': 2551369.08
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [MUTUAL TRUST BANK LTD.] [MIRPUR BRANCH]  AC/No. 5508430100144166 [ Shah Md. Asraf] SL:111810 - 28170',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.78,
                        'balance': 2551368.3
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518372000000,
                        'narration': '[BEFT] OCE Trans. PPD to [MUTUAL TRUST BANK LTD.] [TEJGAON BRANCH]  AC/No. 00570210004479 [ SB] SL:111811 - 28173',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 0.88,
                        'balance': 2551367.42
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Md. Shohel Rana AC/No. 112912122607668 of MERCANTILE BANK LTD. (140261725) - 27825',
                        'transactionMode': 'Clearing',
                        'creditAmount': 50,
                        'debitAmount': 0,
                        'balance': 2551417.42
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] Outward PPD Fund Trans to MST JOLY BEGUM AC/No. 2870201447204 of ISLAMI BANK BANGLDESH LTD. (125440790) - 27837',
                        'transactionMode': 'Clearing',
                        'creditAmount': 50,
                        'debitAmount': 0,
                        'balance': 2551467.42
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Mohammad  AC/No. 1133204000051850 of UNITED COMMERCIAL BANK LTD. (245263707) - 27852',
                        'transactionMode': 'Clearing',
                        'creditAmount': 500,
                        'debitAmount': 0,
                        'balance': 2551967.42
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Sheikh Fazleh Elahee AC/No. 1141020018720 of EASTERN BANK LTD. (095260550) - 27857',
                        'transactionMode': 'Clearing',
                        'creditAmount': 100,
                        'debitAmount': 0,
                        'balance': 2552067.42
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Estial Ahmed AC/No. 02834009050 of BANK ASIA LTD. (070263198) - 27872',
                        'transactionMode': 'Clearing',
                        'creditAmount': 100,
                        'debitAmount': 0,
                        'balance': 2552167.42
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Masudul Hasan AC/No. 03834000261 of STANDARD BANK LTD. (210263703) - 27883',
                        'transactionMode': 'Clearing',
                        'creditAmount': 200,
                        'debitAmount': 0,
                        'balance': 2552367.42
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] Outward PPD Fund Trans to FARIDA AKTER AC/No. 17810194903 of DUTCH-BANGLA BANK LTD (090275740) - 27888',
                        'transactionMode': 'Clearing',
                        'creditAmount': 200,
                        'debitAmount': 0,
                        'balance': 2552567.42
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Tanjim Hassan AC/No. 16810528379 of DUTCH-BANGLA BANK LTD (090500949) - 27899',
                        'transactionMode': 'Clearing',
                        'creditAmount': 900,
                        'debitAmount': 0,
                        'balance': 2553467.42
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Md.Mazharul Islam AC/No. 156151148859 of DUTCH-BANGLA BANK LTD (090611759) - 27992',
                        'transactionMode': 'Clearing',
                        'creditAmount': 200,
                        'debitAmount': 0,
                        'balance': 2553667.42
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Mim Mursalin AC/No. 172101162295 of DUTCH-BANGLA BANK LTD (090280672) - 27995',
                        'transactionMode': 'Clearing',
                        'creditAmount': 10,
                        'debitAmount': 0,
                        'balance': 2553677.42
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] Outward PPD Fund Trans to M. R. Rashid Rana AC/No. 1221260033135 of EASTERN BANK LTD. (095263702) - 27996',
                        'transactionMode': 'Clearing',
                        'creditAmount': 50,
                        'debitAmount': 0,
                        'balance': 2553727.42
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Md. Abul Basha AC/No. 117101301085 of DUTCH-BANGLA BANK LTD (090264630) - 28026',
                        'transactionMode': 'Clearing',
                        'creditAmount': 1000,
                        'debitAmount': 0,
                        'balance': 2554727.42
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Md Ainul Kabir AC/No. 7017017678161 of DUTCH-BANGLA BANK LTD (090154274) - 28027',
                        'transactionMode': 'Clearing',
                        'creditAmount': 10,
                        'debitAmount': 0,
                        'balance': 2554737.42
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] Outward PPD Fund Trans to MD SHAHIN AC/No. 1091510062269 of DUTCH-BANGLA BANK LTD (090680106) - 28044',
                        'transactionMode': 'Clearing',
                        'creditAmount': 100,
                        'debitAmount': 0,
                        'balance': 2554837.42
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Dhiman Goswami AC/No. 0440434290246 of SONALI BANK LTD. (200270522) - 28045',
                        'transactionMode': 'Clearing',
                        'creditAmount': 1500,
                        'debitAmount': 0,
                        'balance': 2556337.42
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Md. Ashrafu AC/No. 0200002935251 of AGRANI BANK LTD. (010273193) - 28047',
                        'transactionMode': 'Clearing',
                        'creditAmount': 50,
                        'debitAmount': 0,
                        'balance': 2556387.42
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] Outward PPD Fund Trans to FARIDA AKTER AC/No. 17810194903 of DUTCH-BANGLA BANK LTD (090275740) - 28054',
                        'transactionMode': 'Clearing',
                        'creditAmount': 100,
                        'debitAmount': 0,
                        'balance': 2556487.42
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] Outward PPD Fund Trans to DIDARUL ISLAM AC/No. 1210206597000 of ISLAMI BANK BANGLDESH LTD. (125191157) - 28073',
                        'transactionMode': 'Clearing',
                        'creditAmount': 50,
                        'debitAmount': 0,
                        'balance': 2556537.42
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Mehedi Hasan AC/No. 13321060026392 of PRIME BANK LTD. (170263106) - 28088',
                        'transactionMode': 'Clearing',
                        'creditAmount': 10,
                        'debitAmount': 0,
                        'balance': 2556547.42
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] Outward PPD Fund Trans to MD Nissan Joardar AC/No. 4111133013859 of SONALI BANK LTD. (200761215) - 27923',
                        'transactionMode': 'Clearing',
                        'creditAmount': 1500,
                        'debitAmount': 0,
                        'balance': 2558047.42
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Shepon Kumer  AC/No. 1561052717 of DUTCH-BANGLA BANK LTD (090611759) - 27929',
                        'transactionMode': 'Clearing',
                        'creditAmount': 124,
                        'debitAmount': 0,
                        'balance': 2558171.42
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] Outward PPD Fund Trans to MD ALAMIN AC/No. 280812200214637 of UTTARA BANK LTD. (250410945) - 27934',
                        'transactionMode': 'Clearing',
                        'creditAmount': 500,
                        'debitAmount': 0,
                        'balance': 2558671.42
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Mad Mamun H AC/No. 1920202433113 of ISLAMI BANK BANGLDESH LTD. (125781091) - 27946',
                        'transactionMode': 'Clearing',
                        'creditAmount': 100,
                        'debitAmount': 0,
                        'balance': 2558771.42
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Md. Shoyaib  AC/No. 1371050027860 of DUTCH-BANGLA BANK LTD (090264122) - 27958',
                        'transactionMode': 'Clearing',
                        'creditAmount': 500,
                        'debitAmount': 0,
                        'balance': 2559271.42
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] Outward PPD Fund Trans to RASHED BI AC/No. 0721340032958 of SOCIAL ISLAMI BANK LTD (195260726) - 27959',
                        'transactionMode': 'Clearing',
                        'creditAmount': 100,
                        'debitAmount': 0,
                        'balance': 2559371.42
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Md Azharul Islam AC/No. 1091010001460 of EASTERN BANK LTD. (095260721) - 27971',
                        'transactionMode': 'Clearing',
                        'creditAmount': 2000,
                        'debitAmount': 0,
                        'balance': 2561371.42
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Ventec Global AC/No. 0200009373068 of AGRANI BANK LTD. (010472381) - 27974',
                        'transactionMode': 'Clearing',
                        'creditAmount': 20,
                        'debitAmount': 0,
                        'balance': 2561391.42
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Abdus Salam AC/No. 0008034026609 of NATIONAL BANK LTD. (150931579) - 27976',
                        'transactionMode': 'Clearing',
                        'creditAmount': 100,
                        'debitAmount': 0,
                        'balance': 2561491.42
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] Outward PPD Fund Trans to Md. Mahmudul  AC/No. 1401050031162 of DUTCH-BANGLA BANK LTD (090300523) - 27985',
                        'transactionMode': 'Clearing',
                        'creditAmount': 10,
                        'debitAmount': 0,
                        'balance': 2561501.42
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] Outward PPD Fund Trans to MST NAFISA S AC/No. 1310201848014 of ISLAMI BANK BANGLDESH LTD. (125262981) - 28031',
                        'transactionMode': 'Clearing',
                        'creditAmount': 50,
                        'debitAmount': 0,
                        'balance': 2561551.42
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To THE CITY BANK LTD.  [376948000295132]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.51,
                        'debitAmount': 0,
                        'balance': 2561551.93
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To BRAC BANK LTD.  [1510202376898]  [R03 - No Account/Unable to Locate Account]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.15,
                        'debitAmount': 0,
                        'balance': 2561552.08
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To PRIME BANK LTD.  [13321060026392]  [R03 - No Account/Unable to Locate Account]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 10,
                        'balance': 2561542.08
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To DUTCH-BANGLA BANK LTD  [7017017678161]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 10,
                        'balance': 2561532.08
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To DUTCH-BANGLA BANK LTD  [395945541268419]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.17,
                        'debitAmount': 0,
                        'balance': 2561532.25
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To DUTCH-BANGLA BANK LTD  [017838328329]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.01,
                        'debitAmount': 0,
                        'balance': 2561532.26
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To DUTCH-BANGLA BANK LTD  [1371050027860]  [R01 - Insufficient Funds]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 500,
                        'balance': 2561032.26
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To DUTCH-BANGLA BANK LTD  [019439838984]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.22,
                        'debitAmount': 0,
                        'balance': 2561032.48
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To DUTCH-BANGLA BANK LTD  [70170121900229]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.57,
                        'debitAmount': 0,
                        'balance': 2561033.05
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To AB BANK LTD.  [1535458765235]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.4,
                        'debitAmount': 0,
                        'balance': 2561033.45
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To NRB BANK  [254252365233]  [R22 - Invalid Individual ID Number ]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.56,
                        'debitAmount': 0,
                        'balance': 2561034.01
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To AL-ARAFAH ISLAMI BANK LTD.  [1122336655]  [R03 - No Account/Unable to Locate Account]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.4,
                        'debitAmount': 0,
                        'balance': 2561034.41
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To AGRANI BANK LTD.  [12348527962821]  [R03 - No Account/Unable to Locate Account]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.33,
                        'debitAmount': 0,
                        'balance': 2561034.74
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To CITI BANK N A  [1942801922877001]  [R03 - No Account/Unable to Locate Account]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.62,
                        'debitAmount': 0,
                        'balance': 2561035.36
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To BANGLADESH KRISHI BANK  [0000018485]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.35,
                        'debitAmount': 0,
                        'balance': 2561035.71
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To ISLAMI BANK BANGLDESH LTD.  [5656552358]  [R03 - No Account/Unable to Locate Account]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.35,
                        'debitAmount': 0,
                        'balance': 2561036.06
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To ISLAMI BANK BANGLDESH LTD.  [7250521524]  [R03 - No Account/Unable to Locate Account]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.45,
                        'debitAmount': 0,
                        'balance': 2561036.51
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To RUPALI BANK LTD.  [2569882386]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.12,
                        'debitAmount': 0,
                        'balance': 2561036.63
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To EASTERN BANK LTD.  [4685370874902357]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.73,
                        'debitAmount': 0,
                        'balance': 2561037.36
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To EASTERN BANK LTD.  [546008786311301]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.18,
                        'debitAmount': 0,
                        'balance': 2561037.54
                    },
                    'iPayTransactions': [],
                    'status': 'DUPLICATE',
                    'category': 'DUPLICATE',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To EASTERN BANK LTD.  [489340653749761]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.32,
                        'debitAmount': 0,
                        'balance': 2561037.86
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To AGRANI BANK LTD.  [1904427097]  [R03 - No Account/Unable to Locate Account]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.64,
                        'debitAmount': 0,
                        'balance': 2561038.5
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To BANGLADESH DEVELOPMENT BANK LTD.  [108523799854]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.06,
                        'debitAmount': 0,
                        'balance': 2561038.56
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To UNITED COMMERCIAL BANK LTD.  [1281140000672]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.93,
                        'debitAmount': 0,
                        'balance': 2561039.49
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To UNITED COMMERCIAL BANK LTD.  [0453206000020841]  [R03 - No Account/Unable to Locate Account]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.77,
                        'debitAmount': 0,
                        'balance': 2561040.26
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To AGRANI BANK LTD.  [0200009373068]  [R03 - No Account/Unable to Locate Account]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 20,
                        'balance': 2561020.26
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To TRUST BANK LTD.  [0214032228]  [R03 - No Account/Unable to Locate Account]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.56,
                        'debitAmount': 0,
                        'balance': 2561020.82
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To STATE BANK OF INDIA  [35716198840]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.94,
                        'debitAmount': 0,
                        'balance': 2561021.76
                    },
                    'iPayTransactions': [],
                    'status': 'DUPLICATE',
                    'category': 'DUPLICATE',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To EXIM BANK LTD.  [1122334455]  [R03 - No Account/Unable to Locate Account]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.13,
                        'debitAmount': 0,
                        'balance': 2561021.89
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To SOUTHEAST BANK LTD.  [00012100003180]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.44,
                        'debitAmount': 0,
                        'balance': 2561022.33
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To BANK ASIA LTD.  [0083401300]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.9,
                        'debitAmount': 0,
                        'balance': 2561023.23
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To BANK ASIA LTD.  [0693300394]  [R04 - Invalid Account Number]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0.04,
                        'debitAmount': 0,
                        'balance': 2561023.27
                    },
                    'iPayTransactions': [],
                    'status': 'DUPLICATE',
                    'category': 'DUPLICATE',
                    'groupId': null
                },
                {
                    'bankStatementTransaction': {
                        'transactionDate': 1518458400000,
                        'narration': '[BEFT] [IRE] PPD. iPAY SYSTEMS LTD  iPAY SYSTE To NATIONAL BANK LTD.  [0008034026609]  [R01 - Insufficient Funds]',
                        'transactionMode': 'Clearing',
                        'creditAmount': 0,
                        'debitAmount': 100,
                        'balance': 2560923.27
                    },
                    'iPayTransactions': [],
                    'status': 'UNMATCHED',
                    'category': 'UNMATCHED',
                    'groupId': null
                }
            ]
        };
    }
    */
};

export default Http;

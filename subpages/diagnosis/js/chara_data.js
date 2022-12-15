'use strict';

// charaInfos本体
// ※注意※ 修正する時はcRecordsとbfDataの各性格因子のfacetの数値のみにすること
// ↑diagnosis.jsに修正用の式あり
const charaInfos = [
    {
        "name": "Zuikaku",
        "jpName": "瑞鶴",
        "bfData": {
            "協調性": {
                "facet": {
                    "利他性": 70,
                    "協調性": 30,
                    "謙虚さ": 70,
                    "倫理観": 70,
                    "共感性": 70,
                    "素直さ": 70
                },
                "posBFValue": 63,
                "negBFValue": 37,
                "bfVsup": 26,
                "bfRate": 5,
                "fBFR": [
                    6,
                    2,
                    6,
                    6,
                    6,
                    6
                ]
            },
            "外向性": {
                "facet": {
                    "活発さ": 70,
                    "自己主張": 70,
                    "雰囲気": 70,
                    "刺激欲求": 70,
                    "心の拠り所": 50,
                    "社交性": 70
                },
                "posBFValue": 67,
                "negBFValue": 33,
                "bfVsup": 34,
                "bfRate": 5,
                "fBFR": [
                    6,
                    6,
                    6,
                    6,
                    4,
                    6
                ]
            },
            "開放性": {
                "facet": {
                    "冒険心": 70,
                    "芸術観": 50,
                    "情動性": 70,
                    "思考": 90,
                    "知的態度": 70,
                    "社会的態度": 70
                },
                "posBFValue": 70,
                "negBFValue": 30,
                "bfVsup": 40,
                "bfRate": 6,
                "fBFR": [
                    6,
                    4,
                    6,
                    8,
                    6,
                    6
                ]
            },
            "誠実性": {
                "facet": {
                    "向上心": 90,
                    "慎重さ": 30,
                    "忠実さ": 70,
                    "秩序性": 50,
                    "自制力": 90,
                    "自己効力感": 70
                },
                "posBFValue": 67,
                "negBFValue": 33,
                "bfVsup": 34,
                "bfRate": 5,
                "fBFR": [
                    8,
                    2,
                    6,
                    4,
                    8,
                    6
                ]
            },
            "神経症的傾向": {
                "facet": {
                    "怒り": 70,
                    "不安": 50,
                    "抑鬱傾向": 70,
                    "衝動性": 10,
                    "自意識": 90,
                    "気弱さ": 30
                },
                "posBFValue": 53,
                "negBFValue": 47,
                "bfVsup": 6,
                "bfRate": 4,
                "fBFR": [
                    6,
                    4,
                    6,
                    0,
                    8,
                    2
                ]
            }
        },
        "cRecords": [
            3,
            0,
            1,
            8,
            3
        ],
        "attr": {
            "courage": 6,
            "wise": 0,
            "kind": 5,
            "aggressive": 7,
            "narcissism": -1,
            "sadism": 0,
            "machiavellism": 0,
            "psychopathy": 0,
            "playful": 0,
            "dark": 0
        }
    },
    {
        "name": "Shokaku",
        "jpName": "翔鶴",
        "bfData": {
            "協調性": {
                "facet": {
                    "利他性": 70,
                    "協調性": 50,
                    "謙虚さ": 50,
                    "倫理観": 70,
                    "共感性": 70,
                    "素直さ": 50
                },
                "posBFValue": 60,
                "negBFValue": 40,
                "bfVsup": 20,
                "bfRate": 5,
                "fBFR": [
                    6,
                    4,
                    4,
                    6,
                    6,
                    4
                ]
            },
            "外向性": {
                "facet": {
                    "活発さ": 30,
                    "自己主張": 30,
                    "雰囲気": 50,
                    "刺激欲求": 30,
                    "心の拠り所": 50,
                    "社交性": 50
                },
                "posBFValue": 40,
                "negBFValue": 60,
                "bfVsup": -20,
                "bfRate": 3,
                "fBFR": [
                    2,
                    2,
                    4,
                    2,
                    4,
                    4
                ]
            },
            "開放性": {
                "facet": {
                    "冒険心": 50,
                    "芸術観": 70,
                    "情動性": 50,
                    "思考": 70,
                    "知的態度": 70,
                    "社会的態度": 70
                },
                "posBFValue": 63,
                "negBFValue": 37,
                "bfVsup": 26,
                "bfRate": 5,
                "fBFR": [
                    4,
                    6,
                    4,
                    6,
                    6,
                    6
                ]
            },
            "誠実性": {
                "facet": {
                    "向上心": 70,
                    "慎重さ": 70,
                    "忠実さ": 70,
                    "秩序性": 90,
                    "自制力": 90,
                    "自己効力感": 70
                },
                "posBFValue": 77,
                "negBFValue": 23,
                "bfVsup": 54,
                "bfRate": 6,
                "fBFR": [
                    6,
                    6,
                    6,
                    8,
                    8,
                    6
                ]
            },
            "神経症的傾向": {
                "facet": {
                    "怒り": 10,
                    "不安": 70,
                    "抑鬱傾向": 50,
                    "衝動性": 30,
                    "自意識": 50,
                    "気弱さ": 30
                },
                "posBFValue": 40,
                "negBFValue": 60,
                "bfVsup": -20,
                "bfRate": 3,
                "fBFR": [
                    0,
                    6,
                    4,
                    2,
                    4,
                    2
                ]
            }
        },
        "cRecords": [
            2,
            3,
            0,
            0,
            1
        ],
        "attr": {
            "courage": 0,
            "wise": 3,
            "kind": 7,
            "aggressive": 3,
            "narcissism": 0,
            "sadism": 0,
            "machiavellism": 0,
            "psychopathy": 0,
            "playful": 0,
            "dark": 0
        }
    },
    {
        "name": "Sendai",
        "jpName": "川内",
        "bfData": {
            "協調性": {
                "facet": {
                    "利他性": 70,
                    "協調性": 50,
                    "謙虚さ": 50,
                    "倫理観": 50,
                    "共感性": 90,
                    "素直さ": 70
                },
                "posBFValue": 63,
                "negBFValue": 37,
                "bfVsup": 26,
                "bfRate": 5,
                "fBFR": [
                    6,
                    4,
                    4,
                    4,
                    8,
                    6
                ]
            },
            "外向性": {
                "facet": {
                    "活発さ": 70,
                    "自己主張": 70,
                    "雰囲気": 90,
                    "刺激欲求": 90,
                    "心の拠り所": 70,
                    "社交性": 90
                },
                "posBFValue": 80,
                "negBFValue": 20,
                "bfVsup": 60,
                "bfRate": 7,
                "fBFR": [
                    6,
                    6,
                    8,
                    8,
                    6,
                    8
                ]
            },
            "開放性": {
                "facet": {
                    "冒険心": 70,
                    "芸術観": 50,
                    "情動性": 70,
                    "思考": 70,
                    "知的態度": 70,
                    "社会的態度": 70
                },
                "posBFValue": 67,
                "negBFValue": 33,
                "bfVsup": 34,
                "bfRate": 5,
                "fBFR": [
                    6,
                    4,
                    6,
                    6,
                    6,
                    6
                ]
            },
            "誠実性": {
                "facet": {
                    "向上心": 50,
                    "慎重さ": 30,
                    "忠実さ": 50,
                    "秩序性": 50,
                    "自制力": 30,
                    "自己効力感": 50
                },
                "posBFValue": 43,
                "negBFValue": 57,
                "bfVsup": -14,
                "bfRate": 3,
                "fBFR": [
                    4,
                    2,
                    4,
                    4,
                    2,
                    4
                ]
            },
            "神経症的傾向": {
                "facet": {
                    "怒り": 30,
                    "不安": 10,
                    "抑鬱傾向": 10,
                    "衝動性": 70,
                    "自意識": 30,
                    "気弱さ": 30
                },
                "posBFValue": 30,
                "negBFValue": 70,
                "bfVsup": -40,
                "bfRate": 2,
                "fBFR": [
                    2,
                    0,
                    0,
                    6,
                    2,
                    2
                ]
            }
        },
        "cRecords": [
            1,
            1,
            4,
            2,
            12
        ],
        "attr": {
            "courage": 3,
            "wise": 3,
            "kind": 3,
            "aggressive": 5,
            "narcissism": 1,
            "sadism": -2,
            "machiavellism": 1,
            "psychopathy": 0,
            "playful": 2,
            "dark": 2
        }
    },
    {
        "name": "Ikazuchi",
        "jpName": "雷",
        "bfData": {
            "協調性": {
                "facet": {
                    "利他性": 90,
                    "協調性": 50,
                    "謙虚さ": 50,
                    "倫理観": 30,
                    "共感性": 90,
                    "素直さ": 70
                },
                "posBFValue": 63,
                "negBFValue": 37,
                "bfVsup": 26,
                "bfRate": 5,
                "fBFR": [
                    8,
                    4,
                    4,
                    2,
                    8,
                    6
                ]
            },
            "外向性": {
                "facet": {
                    "活発さ": 90,
                    "自己主張": 50,
                    "雰囲気": 70,
                    "刺激欲求": 50,
                    "心の拠り所": 90,
                    "社交性": 90
                },
                "posBFValue": 73,
                "negBFValue": 27,
                "bfVsup": 46,
                "bfRate": 6,
                "fBFR": [
                    8,
                    4,
                    6,
                    4,
                    8,
                    8
                ]
            },
            "開放性": {
                "facet": {
                    "冒険心": 30,
                    "芸術観": 50,
                    "情動性": 70,
                    "思考": 70,
                    "知的態度": 50,
                    "社会的態度": 30
                },
                "posBFValue": 50,
                "negBFValue": 50,
                "bfVsup": 0,
                "bfRate": 4,
                "fBFR": [
                    2,
                    4,
                    6,
                    6,
                    4,
                    2
                ]
            },
            "誠実性": {
                "facet": {
                    "向上心": 70,
                    "慎重さ": 70,
                    "忠実さ": 70,
                    "秩序性": 90,
                    "自制力": 90,
                    "自己効力感": 70
                },
                "posBFValue": 77,
                "negBFValue": 23,
                "bfVsup": 54,
                "bfRate": 6,
                "fBFR": [
                    6,
                    6,
                    6,
                    8,
                    8,
                    6
                ]
            },
            "神経症的傾向": {
                "facet": {
                    "怒り": 70,
                    "不安": 70,
                    "抑鬱傾向": 10,
                    "衝動性": 10,
                    "自意識": 50,
                    "気弱さ": 50
                },
                "posBFValue": 43,
                "negBFValue": 57,
                "bfVsup": -14,
                "bfRate": 3,
                "fBFR": [
                    6,
                    6,
                    0,
                    0,
                    4,
                    4
                ]
            }
        },
        "cRecords": [
            2,
            4,
            5,
            0,
            1
        ],
        "attr": {
            "courage": 2,
            "wise": 2,
            "kind": 6,
            "aggressive": 6,
            "narcissism": 0,
            "sadism": 1,
            "machiavellism": 0,
            "psychopathy": 0,
            "playful": 0,
            "dark": 1
        }
    },
    {
        "name": "Akatsuki",
        "jpName": "暁",
        "bfData": {
            "協調性": {
                "facet": {
                    "利他性": 50,
                    "協調性": 50,
                    "謙虚さ": 30,
                    "倫理観": 90,
                    "共感性": 90,
                    "素直さ": 90
                },
                "posBFValue": 67,
                "negBFValue": 33,
                "bfVsup": 34,
                "bfRate": 5,
                "fBFR": [
                    4,
                    4,
                    2,
                    8,
                    8,
                    8
                ]
            },
            "外向性": {
                "facet": {
                    "活発さ": 50,
                    "自己主張": 70,
                    "雰囲気": 70,
                    "刺激欲求": 50,
                    "心の拠り所": 70,
                    "社交性": 70
                },
                "posBFValue": 63,
                "negBFValue": 37,
                "bfVsup": 26,
                "bfRate": 5,
                "fBFR": [
                    4,
                    6,
                    6,
                    4,
                    6,
                    6
                ]
            },
            "開放性": {
                "facet": {
                    "冒険心": 50,
                    "芸術観": 50,
                    "情動性": 90,
                    "思考": 50,
                    "知的態度": 50,
                    "社会的態度": 30
                },
                "posBFValue": 53,
                "negBFValue": 47,
                "bfVsup": 6,
                "bfRate": 4,
                "fBFR": [
                    4,
                    4,
                    8,
                    4,
                    4,
                    2
                ]
            },
            "誠実性": {
                "facet": {
                    "向上心": 50,
                    "慎重さ": 10,
                    "忠実さ": 70,
                    "秩序性": 70,
                    "自制力": 10,
                    "自己効力感": 50
                },
                "posBFValue": 43,
                "negBFValue": 57,
                "bfVsup": -14,
                "bfRate": 3,
                "fBFR": [
                    4,
                    0,
                    6,
                    6,
                    0,
                    4
                ]
            },
            "神経症的傾向": {
                "facet": {
                    "怒り": 50,
                    "不安": 30,
                    "抑鬱傾向": 30,
                    "衝動性": 70,
                    "自意識": 50,
                    "気弱さ": 70
                },
                "posBFValue": 50,
                "negBFValue": 50,
                "bfVsup": 0,
                "bfRate": 4,
                "fBFR": [
                    4,
                    2,
                    2,
                    6,
                    4,
                    6
                ]
            }
        },
        "cRecords": [
            1,
            0,
            0,
            1,
            5
        ],
        "attr": {
            "courage": 3,
            "wise": 1,
            "kind": 5,
            "aggressive": 3,
            "narcissism": 1,
            "sadism": 0,
            "machiavellism": -2,
            "psychopathy": 0,
            "playful": 2,
            "dark": 1
        }
    },
    {
        "name": "Hibiki",
        "jpName": "響",
        "bfData": {
            "協調性": {
                "facet": {
                    "利他性": 50,
                    "協調性": 30,
                    "謙虚さ": 30,
                    "倫理観": 30,
                    "共感性": 70,
                    "素直さ": 50
                },
                "posBFValue": 43,
                "negBFValue": 57,
                "bfVsup": -14,
                "bfRate": 3,
                "fBFR": [
                    4,
                    2,
                    2,
                    2,
                    6,
                    4
                ]
            },
            "外向性": {
                "facet": {
                    "活発さ": 50,
                    "自己主張": 50,
                    "雰囲気": 70,
                    "刺激欲求": 70,
                    "心の拠り所": 50,
                    "社交性": 50
                },
                "posBFValue": 57,
                "negBFValue": 43,
                "bfVsup": 14,
                "bfRate": 5,
                "fBFR": [
                    4,
                    4,
                    6,
                    6,
                    4,
                    4
                ]
            },
            "開放性": {
                "facet": {
                    "冒険心": 70,
                    "芸術観": 50,
                    "情動性": 50,
                    "思考": 50,
                    "知的態度": 90,
                    "社会的態度": 70
                },
                "posBFValue": 63,
                "negBFValue": 37,
                "bfVsup": 26,
                "bfRate": 5,
                "fBFR": [
                    6,
                    4,
                    4,
                    4,
                    8,
                    6
                ]
            },
            "誠実性": {
                "facet": {
                    "向上心": 50,
                    "慎重さ": 50,
                    "忠実さ": 10,
                    "秩序性": 10,
                    "自制力": 30,
                    "自己効力感": 90
                },
                "posBFValue": 40,
                "negBFValue": 60,
                "bfVsup": -20,
                "bfRate": 3,
                "fBFR": [
                    4,
                    4,
                    0,
                    0,
                    2,
                    8
                ]
            },
            "神経症的傾向": {
                "facet": {
                    "怒り": 10,
                    "不安": 10,
                    "抑鬱傾向": 10,
                    "衝動性": 30,
                    "自意識": 0,
                    "気弱さ": 10
                },
                "posBFValue": 12,
                "negBFValue": 88,
                "bfVsup": -76,
                "bfRate": 1,
                "fBFR": [
                    0,
                    0,
                    0,
                    2,
                    0,
                    0
                ]
            }
        },
        "cRecords": [
            1,
            6,
            4,
            1,
            0
        ],
        "attr": {
            "courage": 1,
            "wise": 4,
            "kind": 3,
            "aggressive": 3,
            "narcissism": 1,
            "sadism": -2,
            "machiavellism": -2,
            "psychopathy": -2,
            "playful": 6,
            "dark": 1
        }
    },
    {
        "name": "Inazuma",
        "jpName": "電",
        "bfData": {
            "協調性": {
                "facet": {
                    "利他性": 50,
                    "協調性": 30,
                    "謙虚さ": 50,
                    "倫理観": 50,
                    "共感性": 30,
                    "素直さ": 10
                },
                "posBFValue": 37,
                "negBFValue": 63,
                "bfVsup": -26,
                "bfRate": 3,
                "fBFR": [
                    4,
                    2,
                    4,
                    4,
                    2,
                    0
                ]
            },
            "外向性": {
                "facet": {
                    "活発さ": 30,
                    "自己主張": 30,
                    "雰囲気": 30,
                    "刺激欲求": 30,
                    "心の拠り所": 30,
                    "社交性": 30
                },
                "posBFValue": 30,
                "negBFValue": 70,
                "bfVsup": -40,
                "bfRate": 2,
                "fBFR": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                ]
            },
            "開放性": {
                "facet": {
                    "冒険心": 30,
                    "芸術観": 50,
                    "情動性": 30,
                    "思考": 30,
                    "知的態度": 30,
                    "社会的態度": 50
                },
                "posBFValue": 37,
                "negBFValue": 63,
                "bfVsup": -26,
                "bfRate": 3,
                "fBFR": [
                    2,
                    4,
                    2,
                    2,
                    2,
                    4
                ]
            },
            "誠実性": {
                "facet": {
                    "向上心": 50,
                    "慎重さ": 70,
                    "忠実さ": 70,
                    "秩序性": 70,
                    "自制力": 90,
                    "自己効力感": 70
                },
                "posBFValue": 70,
                "negBFValue": 30,
                "bfVsup": 40,
                "bfRate": 6,
                "fBFR": [
                    4,
                    6,
                    6,
                    6,
                    8,
                    6
                ]
            },
            "神経症的傾向": {
                "facet": {
                    "怒り": 70,
                    "不安": 70,
                    "抑鬱傾向": 50,
                    "衝動性": 10,
                    "自意識": 50,
                    "気弱さ": 50
                },
                "posBFValue": 50,
                "negBFValue": 50,
                "bfVsup": 0,
                "bfRate": 4,
                "fBFR": [
                    6,
                    6,
                    4,
                    0,
                    4,
                    4
                ]
            }
        },
        "cRecords": [
            2,
            0,
            5,
            8,
            12
        ],
        "attr": {
            "courage": 6,
            "wise": 1,
            "kind": 4,
            "aggressive": 6,
            "narcissism": 0,
            "sadism": 1,
            "machiavellism": 0,
            "psychopathy": 0,
            "playful": 0,
            "dark": 1
        }
    },
    {
        "name": "Furutaka",
        "jpName": "古鷹",
        "bfData": {
            "協調性": {
                "facet": {
                    "利他性": 90,
                    "協調性": 70,
                    "謙虚さ": 90,
                    "倫理観": 90,
                    "共感性": 70,
                    "素直さ": 70
                },
                "posBFValue": 80,
                "negBFValue": 20,
                "bfVsup": 60,
                "bfRate": 7,
                "fBFR": [
                    8,
                    6,
                    8,
                    8,
                    6,
                    6
                ]
            },
            "外向性": {
                "facet": {
                    "活発さ": 50,
                    "自己主張": 10,
                    "雰囲気": 50,
                    "刺激欲求": 30,
                    "心の拠り所": 30,
                    "社交性": 30
                },
                "posBFValue": 33,
                "negBFValue": 67,
                "bfVsup": -34,
                "bfRate": 3,
                "fBFR": [
                    4,
                    0,
                    4,
                    2,
                    2,
                    2
                ]
            },
            "開放性": {
                "facet": {
                    "冒険心": 30,
                    "芸術観": 50,
                    "情動性": 50,
                    "思考": 30,
                    "知的態度": 30,
                    "社会的態度": 30
                },
                "posBFValue": 37,
                "negBFValue": 63,
                "bfVsup": -26,
                "bfRate": 3,
                "fBFR": [
                    2,
                    4,
                    4,
                    2,
                    2,
                    2
                ]
            },
            "誠実性": {
                "facet": {
                    "向上心": 30,
                    "慎重さ": 70,
                    "忠実さ": 90,
                    "秩序性": 90,
                    "自制力": 70,
                    "自己効力感": 10
                },
                "posBFValue": 60,
                "negBFValue": 40,
                "bfVsup": 20,
                "bfRate": 5,
                "fBFR": [
                    2,
                    6,
                    8,
                    8,
                    6,
                    0
                ]
            },
            "神経症的傾向": {
                "facet": {
                    "怒り": 30,
                    "不安": 90,
                    "抑鬱傾向": 90,
                    "衝動性": 10,
                    "自意識": 90,
                    "気弱さ": 90
                },
                "posBFValue": 67,
                "negBFValue": 33,
                "bfVsup": 34,
                "bfRate": 5,
                "fBFR": [
                    2,
                    8,
                    8,
                    0,
                    8,
                    8
                ]
            }
        },
        "cRecords": [
            4,
            3,
            0,
            6,
            10
        ],
        "attr": {
            "courage": 0,
            "wise": 2,
            "kind": 7,
            "aggressive": 0,
            "narcissism": -5,
            "sadism": 0,
            "machiavellism": 0,
            "psychopathy": 0,
            "playful": 0,
            "dark": 0
        }
    },
    {
        "name": "Zuiho",
        "jpName": "瑞鳳",
        "bfData": {
            "協調性": {
                "facet": {
                    "利他性": 70,
                    "協調性": 70,
                    "謙虚さ": 50,
                    "倫理観": 70,
                    "共感性": 70,
                    "素直さ": 90
                },
                "posBFValue": 70,
                "negBFValue": 30,
                "bfVsup": 40,
                "bfRate": 6,
                "fBFR": [
                    6,
                    6,
                    4,
                    6,
                    6,
                    8
                ]
            },
            "外向性": {
                "facet": {
                    "活発さ": 30,
                    "自己主張": 50,
                    "雰囲気": 70,
                    "刺激欲求": 30,
                    "心の拠り所": 50,
                    "社交性": 70
                },
                "posBFValue": 50,
                "negBFValue": 50,
                "bfVsup": 0,
                "bfRate": 4,
                "fBFR": [
                    2,
                    4,
                    6,
                    2,
                    4,
                    6
                ]
            },
            "開放性": {
                "facet": {
                    "冒険心": 50,
                    "芸術観": 50,
                    "情動性": 90,
                    "思考": 50,
                    "知的態度": 50,
                    "社会的態度": 50
                },
                "posBFValue": 57,
                "negBFValue": 43,
                "bfVsup": 14,
                "bfRate": 5,
                "fBFR": [
                    4,
                    4,
                    8,
                    4,
                    4,
                    4
                ]
            },
            "誠実性": {
                "facet": {
                    "向上心": 50,
                    "慎重さ": 70,
                    "忠実さ": 70,
                    "秩序性": 70,
                    "自制力": 70,
                    "自己効力感": 70
                },
                "posBFValue": 67,
                "negBFValue": 33,
                "bfVsup": 34,
                "bfRate": 5,
                "fBFR": [
                    4,
                    6,
                    6,
                    6,
                    6,
                    6
                ]
            },
            "神経症的傾向": {
                "facet": {
                    "怒り": 30,
                    "不安": 50,
                    "抑鬱傾向": 30,
                    "衝動性": 30,
                    "自意識": 50,
                    "気弱さ": 70
                },
                "posBFValue": 43,
                "negBFValue": 57,
                "bfVsup": -14,
                "bfRate": 3,
                "fBFR": [
                    2,
                    4,
                    2,
                    2,
                    4,
                    6
                ]
            }
        },
        "cRecords": [
            1,
            4,
            0,
            0,
            1
        ],
        "attr": {
            "courage": 0,
            "wise": 2,
            "kind": 8,
            "aggressive": 4,
            "narcissism": 1,
            "sadism": 0,
            "machiavellism": 0,
            "psychopathy": 0,
            "playful": 0,
            "dark": 1
        }
    },
    {
        "name": "Hiryu",
        "jpName": "飛龍",
        "bfData": {
            "協調性": {
                "facet": {
                    "利他性": 70,
                    "協調性": 70,
                    "謙虚さ": 50,
                    "倫理観": 70,
                    "共感性": 70,
                    "素直さ": 90
                },
                "posBFValue": 70,
                "negBFValue": 30,
                "bfVsup": 40,
                "bfRate": 6,
                "fBFR": [
                    6,
                    6,
                    4,
                    6,
                    6,
                    8
                ]
            },
            "外向性": {
                "facet": {
                    "活発さ": 30,
                    "自己主張": 50,
                    "雰囲気": 70,
                    "刺激欲求": 30,
                    "心の拠り所": 50,
                    "社交性": 70
                },
                "posBFValue": 50,
                "negBFValue": 50,
                "bfVsup": 0,
                "bfRate": 4,
                "fBFR": [
                    2,
                    4,
                    6,
                    2,
                    4,
                    6
                ]
            },
            "開放性": {
                "facet": {
                    "冒険心": 70,
                    "芸術観": 50,
                    "情動性": 70,
                    "思考": 50,
                    "知的態度": 70,
                    "社会的態度": 50
                },
                "posBFValue": 60,
                "negBFValue": 40,
                "bfVsup": 20,
                "bfRate": 5,
                "fBFR": [
                    6,
                    4,
                    6,
                    4,
                    6,
                    4
                ]
            },
            "誠実性": {
                "facet": {
                    "向上心": 50,
                    "慎重さ": 10,
                    "忠実さ": 50,
                    "秩序性": 50,
                    "自制力": 90,
                    "自己効力感": 50
                },
                "posBFValue": 50,
                "negBFValue": 50,
                "bfVsup": 0,
                "bfRate": 4,
                "fBFR": [
                    4,
                    0,
                    4,
                    4,
                    8,
                    4
                ]
            },
            "神経症的傾向": {
                "facet": {
                    "怒り": 10,
                    "不安": 10,
                    "抑鬱傾向": 10,
                    "衝動性": 30,
                    "自意識": 30,
                    "気弱さ": 10
                },
                "posBFValue": 17,
                "negBFValue": 83,
                "bfVsup": -66,
                "bfRate": 1,
                "fBFR": [
                    0,
                    0,
                    0,
                    2,
                    2,
                    0
                ]
            }
        },
        "cRecords": [
            2,
            0,
            2,
            2,
            12
        ],
        "attr": {
            "courage": 7,
            "wise": 1,
            "kind": 3,
            "aggressive": 7,
            "narcissism": 0,
            "sadism": 1,
            "machiavellism": 1,
            "psychopathy": 0,
            "playful": 0,
            "dark": 2
        }
    },
    {
        "name": "Soryu",
        "jpName": "蒼龍",
        "bfData": {
            "協調性": {
                "facet": {
                    "利他性": 50,
                    "協調性": 50,
                    "謙虚さ": 50,
                    "倫理観": 30,
                    "共感性": 70,
                    "素直さ": 50
                },
                "posBFValue": 50,
                "negBFValue": 50,
                "bfVsup": 0,
                "bfRate": 4,
                "fBFR": [
                    4,
                    4,
                    4,
                    2,
                    6,
                    4
                ]
            },
            "外向性": {
                "facet": {
                    "活発さ": 70,
                    "自己主張": 70,
                    "雰囲気": 70,
                    "刺激欲求": 70,
                    "心の拠り所": 70,
                    "社交性": 70
                },
                "posBFValue": 70,
                "negBFValue": 30,
                "bfVsup": 40,
                "bfRate": 6,
                "fBFR": [
                    6,
                    6,
                    6,
                    6,
                    6,
                    6
                ]
            },
            "開放性": {
                "facet": {
                    "冒険心": 50,
                    "芸術観": 70,
                    "情動性": 70,
                    "思考": 30,
                    "知的態度": 30,
                    "社会的態度": 30
                },
                "posBFValue": 47,
                "negBFValue": 53,
                "bfVsup": -6,
                "bfRate": 4,
                "fBFR": [
                    4,
                    6,
                    6,
                    2,
                    2,
                    2
                ]
            },
            "誠実性": {
                "facet": {
                    "向上心": 70,
                    "慎重さ": 70,
                    "忠実さ": 50,
                    "秩序性": 50,
                    "自制力": 50,
                    "自己効力感": 50
                },
                "posBFValue": 57,
                "negBFValue": 43,
                "bfVsup": 14,
                "bfRate": 5,
                "fBFR": [
                    6,
                    6,
                    4,
                    4,
                    4,
                    4
                ]
            },
            "神経症的傾向": {
                "facet": {
                    "怒り": 50,
                    "不安": 50,
                    "抑鬱傾向": 30,
                    "衝動性": 50,
                    "自意識": 70,
                    "気弱さ": 50
                },
                "posBFValue": 50,
                "negBFValue": 50,
                "bfVsup": 0,
                "bfRate": 4,
                "fBFR": [
                    4,
                    4,
                    2,
                    4,
                    6,
                    4
                ]
            }
        },
        "cRecords": [
            2,
            3,
            5,
            1,
            12
        ],
        "attr": {
            "courage": 3,
            "wise": 2,
            "kind": 3,
            "aggressive": 3,
            "narcissism": 0,
            "sadism": 1,
            "machiavellism": -2,
            "psychopathy": 0,
            "playful": 2,
            "dark": 1
        }
    },
    {
        "name": "I14",
        "jpName": "伊１４",
        "bfData": {
            "協調性": {
                "facet": {
                    "利他性": 50,
                    "協調性": 50,
                    "謙虚さ": 50,
                    "倫理観": 50,
                    "共感性": 70,
                    "素直さ": 70
                },
                "posBFValue": 57,
                "negBFValue": 43,
                "bfVsup": 14,
                "bfRate": 5,
                "fBFR": [
                    4,
                    4,
                    4,
                    4,
                    6,
                    6
                ]
            },
            "外向性": {
                "facet": {
                    "活発さ": 70,
                    "自己主張": 70,
                    "雰囲気": 90,
                    "刺激欲求": 70,
                    "心の拠り所": 90,
                    "社交性": 90
                },
                "posBFValue": 80,
                "negBFValue": 20,
                "bfVsup": 60,
                "bfRate": 7,
                "fBFR": [
                    6,
                    6,
                    8,
                    6,
                    8,
                    8
                ]
            },
            "開放性": {
                "facet": {
                    "冒険心": 70,
                    "芸術観": 70,
                    "情動性": 70,
                    "思考": 50,
                    "知的態度": 50,
                    "社会的態度": 50
                },
                "posBFValue": 60,
                "negBFValue": 40,
                "bfVsup": 20,
                "bfRate": 5,
                "fBFR": [
                    6,
                    6,
                    6,
                    4,
                    4,
                    4
                ]
            },
            "誠実性": {
                "facet": {
                    "向上心": 10,
                    "慎重さ": 30,
                    "忠実さ": 50,
                    "秩序性": 30,
                    "自制力": 30,
                    "自己効力感": 30
                },
                "posBFValue": 30,
                "negBFValue": 70,
                "bfVsup": -40,
                "bfRate": 2,
                "fBFR": [
                    0,
                    2,
                    4,
                    2,
                    2,
                    2
                ]
            },
            "神経症的傾向": {
                "facet": {
                    "怒り": 30,
                    "不安": 10,
                    "抑鬱傾向": 10,
                    "衝動性": 70,
                    "自意識": 10,
                    "気弱さ": 50
                },
                "posBFValue": 30,
                "negBFValue": 70,
                "bfVsup": -40,
                "bfRate": 2,
                "fBFR": [
                    2,
                    0,
                    0,
                    6,
                    0,
                    4
                ]
            }
        },
        "cRecords": [
            1,
            6,
            4,
            1,
            8
        ],
        "attr": {
            "courage": 1,
            "wise": 2,
            "kind": 3,
            "aggressive": 1,
            "narcissism": 1,
            "sadism": -2,
            "machiavellism": -2,
            "psychopathy": -2,
            "playful": 6,
            "dark": 1
        }
    },
    {
        "name": "Satsuki",
        "jpName": "皐月",
        "bfData": {
            "協調性": {
                "facet": {
                    "利他性": 70,
                    "協調性": 70,
                    "謙虚さ": 70,
                    "倫理観": 90,
                    "共感性": 90,
                    "素直さ": 90
                },
                "posBFValue": 80,
                "negBFValue": 20,
                "bfVsup": 60,
                "bfRate": 7,
                "fBFR": [
                    6,
                    6,
                    6,
                    8,
                    8,
                    8
                ]
            },
            "外向性": {
                "facet": {
                    "活発さ": 70,
                    "自己主張": 70,
                    "雰囲気": 90,
                    "刺激欲求": 70,
                    "心の拠り所": 70,
                    "社交性": 90
                },
                "posBFValue": 77,
                "negBFValue": 23,
                "bfVsup": 54,
                "bfRate": 6,
                "fBFR": [
                    6,
                    6,
                    8,
                    6,
                    6,
                    8
                ]
            },
            "開放性": {
                "facet": {
                    "冒険心": 70,
                    "芸術観": 50,
                    "情動性": 90,
                    "思考": 70,
                    "知的態度": 70,
                    "社会的態度": 30
                },
                "posBFValue": 63,
                "negBFValue": 37,
                "bfVsup": 26,
                "bfRate": 5,
                "fBFR": [
                    6,
                    4,
                    8,
                    6,
                    6,
                    2
                ]
            },
            "誠実性": {
                "facet": {
                    "向上心": 90,
                    "慎重さ": 50,
                    "忠実さ": 70,
                    "秩序性": 70,
                    "自制力": 70,
                    "自己効力感": 70
                },
                "posBFValue": 70,
                "negBFValue": 30,
                "bfVsup": 40,
                "bfRate": 6,
                "fBFR": [
                    8,
                    4,
                    6,
                    6,
                    6,
                    6
                ]
            },
            "神経症的傾向": {
                "facet": {
                    "怒り": 30,
                    "不安": 30,
                    "抑鬱傾向": 30,
                    "衝動性": 30,
                    "自意識": 50,
                    "気弱さ": 70
                },
                "posBFValue": 40,
                "negBFValue": 60,
                "bfVsup": -20,
                "bfRate": 3,
                "fBFR": [
                    2,
                    2,
                    2,
                    2,
                    4,
                    6
                ]
            }
        },
        "cRecords": [
            2,
            0,
            4,
            2,
            4
        ],
        "attr": {
            "courage": 5,
            "wise": 2,
            "kind": 3,
            "aggressive": 7,
            "narcissism": 0,
            "sadism": -2,
            "machiavellism": 1,
            "psychopathy": 0,
            "playful": 2,
            "dark": 1
        }
    },
    {
        "name": "Yubari",
        "jpName": "夕張",
        "bfData": {
            "協調性": {
                "facet": {
                    "利他性": 30,
                    "協調性": 10,
                    "謙虚さ": 10,
                    "倫理観": 30,
                    "共感性": 30,
                    "素直さ": 50
                },
                "posBFValue": 27,
                "negBFValue": 73,
                "bfVsup": -46,
                "bfRate": 2,
                "fBFR": [
                    2,
                    0,
                    0,
                    2,
                    2,
                    4
                ]
            },
            "外向性": {
                "facet": {
                    "活発さ": 70,
                    "自己主張": 50,
                    "雰囲気": 50,
                    "刺激欲求": 70,
                    "心の拠り所": 30,
                    "社交性": 30
                },
                "posBFValue": 50,
                "negBFValue": 50,
                "bfVsup": 0,
                "bfRate": 4,
                "fBFR": [
                    6,
                    4,
                    4,
                    6,
                    2,
                    2
                ]
            },
            "開放性": {
                "facet": {
                    "冒険心": 90,
                    "芸術観": 90,
                    "情動性": 70,
                    "思考": 30,
                    "知的態度": 90,
                    "社会的態度": 50
                },
                "posBFValue": 70,
                "negBFValue": 30,
                "bfVsup": 40,
                "bfRate": 6,
                "fBFR": [
                    8,
                    8,
                    6,
                    2,
                    8,
                    4
                ]
            },
            "誠実性": {
                "facet": {
                    "向上心": 70,
                    "慎重さ": 50,
                    "忠実さ": 50,
                    "秩序性": 10,
                    "自制力": 70,
                    "自己効力感": 70
                },
                "posBFValue": 53,
                "negBFValue": 47,
                "bfVsup": 6,
                "bfRate": 4,
                "fBFR": [
                    6,
                    4,
                    4,
                    0,
                    6,
                    6
                ]
            },
            "神経症的傾向": {
                "facet": {
                    "怒り": 50,
                    "不安": 50,
                    "抑鬱傾向": 50,
                    "衝動性": 70,
                    "自意識": 10,
                    "気弱さ": 50
                },
                "posBFValue": 47,
                "negBFValue": 53,
                "bfVsup": -6,
                "bfRate": 4,
                "fBFR": [
                    4,
                    4,
                    4,
                    6,
                    0,
                    4
                ]
            }
        },
        "cRecords": [
            2,
            2,
            6,
            3,
            7
        ],
        "attr": {
            "courage": 1,
            "wise": 9,
            "kind": 1,
            "aggressive": 6,
            "narcissism": 0,
            "sadism": 0,
            "machiavellism": 2,
            "psychopathy": 1,
            "playful": 0,
            "dark": 3
        }
    },
    {
        "name": "Ise",
        "jpName": "伊勢",
        "bfData": {
            "協調性": {
                "facet": {
                    "利他性": 50,
                    "協調性": 30,
                    "謙虚さ": 30,
                    "倫理観": 90,
                    "共感性": 50,
                    "素直さ": 50
                },
                "posBFValue": 50,
                "negBFValue": 50,
                "bfVsup": 0,
                "bfRate": 4,
                "fBFR": [
                    4,
                    2,
                    2,
                    8,
                    4,
                    4
                ]
            },
            "外向性": {
                "facet": {
                    "活発さ": 30,
                    "自己主張": 30,
                    "雰囲気": 50,
                    "刺激欲求": 30,
                    "心の拠り所": 30,
                    "社交性": 50
                },
                "posBFValue": 37,
                "negBFValue": 63,
                "bfVsup": -26,
                "bfRate": 3,
                "fBFR": [
                    2,
                    2,
                    4,
                    2,
                    2,
                    4
                ]
            },
            "開放性": {
                "facet": {
                    "冒険心": 50,
                    "芸術観": 50,
                    "情動性": 30,
                    "思考": 70,
                    "知的態度": 50,
                    "社会的態度": 50
                },
                "posBFValue": 50,
                "negBFValue": 50,
                "bfVsup": 0,
                "bfRate": 4,
                "fBFR": [
                    4,
                    4,
                    2,
                    6,
                    4,
                    4
                ]
            },
            "誠実性": {
                "facet": {
                    "向上心": 10,
                    "慎重さ": 70,
                    "忠実さ": 30,
                    "秩序性": 30,
                    "自制力": 90,
                    "自己効力感": 70
                },
                "posBFValue": 50,
                "negBFValue": 50,
                "bfVsup": 0,
                "bfRate": 4,
                "fBFR": [
                    0,
                    6,
                    2,
                    2,
                    8,
                    6
                ]
            },
            "神経症的傾向": {
                "facet": {
                    "怒り": 10,
                    "不安": 30,
                    "抑鬱傾向": 70,
                    "衝動性": 10,
                    "自意識": 30,
                    "気弱さ": 10
                },
                "posBFValue": 27,
                "negBFValue": 73,
                "bfVsup": -46,
                "bfRate": 2,
                "fBFR": [
                    0,
                    2,
                    6,
                    0,
                    2,
                    0
                ]
            }
        },
        "cRecords": [
            2,
            3,
            7,
            7,
            8
        ],
        "attr": {
            "courage": 1,
            "wise": 3,
            "kind": 2,
            "aggressive": -2,
            "narcissism": 0,
            "sadism": 0,
            "machiavellism": 0,
            "psychopathy": 0,
            "playful": 0,
            "dark": 0
        }
    },
    {
        "name": "Hosho",
        "jpName": "鳳翔",
        "bfData": {
            "協調性": {
                "facet": {
                    "利他性": 70,
                    "協調性": 50,
                    "謙虚さ": 70,
                    "倫理観": 70,
                    "共感性": 70,
                    "素直さ": 70
                },
                "posBFValue": 67,
                "negBFValue": 33,
                "bfVsup": 34,
                "bfRate": 5,
                "fBFR": [
                    6,
                    4,
                    6,
                    6,
                    6,
                    6
                ]
            },
            "外向性": {
                "facet": {
                    "活発さ": 30,
                    "自己主張": 30,
                    "雰囲気": 50,
                    "刺激欲求": 10,
                    "心の拠り所": 30,
                    "社交性": 70
                },
                "posBFValue": 37,
                "negBFValue": 63,
                "bfVsup": -26,
                "bfRate": 3,
                "fBFR": [
                    2,
                    2,
                    4,
                    0,
                    2,
                    6
                ]
            },
            "開放性": {
                "facet": {
                    "冒険心": 30,
                    "芸術観": 50,
                    "情動性": 50,
                    "思考": 30,
                    "知的態度": 30,
                    "社会的態度": 30
                },
                "posBFValue": 37,
                "negBFValue": 63,
                "bfVsup": -26,
                "bfRate": 3,
                "fBFR": [
                    2,
                    4,
                    4,
                    2,
                    2,
                    2
                ]
            },
            "誠実性": {
                "facet": {
                    "向上心": 70,
                    "慎重さ": 90,
                    "忠実さ": 90,
                    "秩序性": 90,
                    "自制力": 90,
                    "自己効力感": 70
                },
                "posBFValue": 83,
                "negBFValue": 17,
                "bfVsup": 66,
                "bfRate": 7,
                "fBFR": [
                    6,
                    8,
                    8,
                    8,
                    8,
                    6
                ]
            },
            "神経症的傾向": {
                "facet": {
                    "怒り": 30,
                    "不安": 30,
                    "抑鬱傾向": 30,
                    "衝動性": 10,
                    "自意識": 50,
                    "気弱さ": 30
                },
                "posBFValue": 30,
                "negBFValue": 70,
                "bfVsup": -40,
                "bfRate": 2,
                "fBFR": [
                    2,
                    2,
                    2,
                    0,
                    4,
                    2
                ]
            }
        },
        "cRecords": [
            2,
            4,
            0,
            0,
            1
        ],
        "attr": {
            "courage": 0,
            "wise": 2,
            "kind": 8,
            "aggressive": 4,
            "narcissism": 0,
            "sadism": 0,
            "machiavellism": 0,
            "psychopathy": 0,
            "playful": 0,
            "dark": 0
        }
    },
    {
        "name": "Kongo",
        "jpName": "金剛",
        "bfData": {
            "協調性": {
                "facet": {
                    "利他性": 70,
                    "協調性": 50,
                    "謙虚さ": 30,
                    "倫理観": 70,
                    "共感性": 70,
                    "素直さ": 90
                },
                "posBFValue": 63,
                "negBFValue": 37,
                "bfVsup": 26,
                "bfRate": 5,
                "fBFR": [
                    6,
                    4,
                    2,
                    6,
                    6,
                    8
                ]
            },
            "外向性": {
                "facet": {
                    "活発さ": 90,
                    "自己主張": 90,
                    "雰囲気": 90,
                    "刺激欲求": 90,
                    "心の拠り所": 90,
                    "社交性": 90
                },
                "posBFValue": 90,
                "negBFValue": 10,
                "bfVsup": 80,
                "bfRate": 8,
                "fBFR": [
                    8,
                    8,
                    8,
                    8,
                    8,
                    8
                ]
            },
            "開放性": {
                "facet": {
                    "冒険心": 70,
                    "芸術観": 70,
                    "情動性": 90,
                    "思考": 70,
                    "知的態度": 70,
                    "社会的態度": 50
                },
                "posBFValue": 70,
                "negBFValue": 30,
                "bfVsup": 40,
                "bfRate": 6,
                "fBFR": [
                    6,
                    6,
                    8,
                    6,
                    6,
                    4
                ]
            },
            "誠実性": {
                "facet": {
                    "向上心": 70,
                    "慎重さ": 30,
                    "忠実さ": 70,
                    "秩序性": 50,
                    "自制力": 50,
                    "自己効力感": 70
                },
                "posBFValue": 57,
                "negBFValue": 43,
                "bfVsup": 14,
                "bfRate": 5,
                "fBFR": [
                    6,
                    2,
                    6,
                    4,
                    4,
                    6
                ]
            },
            "神経症的傾向": {
                "facet": {
                    "怒り": 30,
                    "不安": 30,
                    "抑鬱傾向": 10,
                    "衝動性": 30,
                    "自意識": 50,
                    "気弱さ": 30
                },
                "posBFValue": 30,
                "negBFValue": 70,
                "bfVsup": -40,
                "bfRate": 2,
                "fBFR": [
                    2,
                    2,
                    0,
                    2,
                    4,
                    2
                ]
            }
        },
        "cRecords": [
            1,
            1,
            5,
            0,
            1
        ],
        "attr": {
            "courage": 3,
            "wise": 3,
            "kind": 4,
            "aggressive": 6,
            "narcissism": 1,
            "sadism": 1,
            "machiavellism": 0,
            "psychopathy": 0,
            "playful": 0,
            "dark": 2
        }
    },
    {
        "name": "Suzuya",
        "jpName": "鈴谷",
        "bfData": {
            "協調性": {
                "facet": {
                    "利他性": 50,
                    "協調性": 30,
                    "謙虚さ": 30,
                    "倫理観": 30,
                    "共感性": 50,
                    "素直さ": 50
                },
                "posBFValue": 40,
                "negBFValue": 60,
                "bfVsup": -20,
                "bfRate": 3,
                "fBFR": [
                    4,
                    2,
                    2,
                    2,
                    4,
                    4
                ]
            },
            "外向性": {
                "facet": {
                    "活発さ": 70,
                    "自己主張": 70,
                    "雰囲気": 70,
                    "刺激欲求": 70,
                    "心の拠り所": 70,
                    "社交性": 70
                },
                "posBFValue": 70,
                "negBFValue": 30,
                "bfVsup": 40,
                "bfRate": 6,
                "fBFR": [
                    6,
                    6,
                    6,
                    6,
                    6,
                    6
                ]
            },
            "開放性": {
                "facet": {
                    "冒険心": 50,
                    "芸術観": 50,
                    "情動性": 70,
                    "思考": 30,
                    "知的態度": 30,
                    "社会的態度": 50
                },
                "posBFValue": 47,
                "negBFValue": 53,
                "bfVsup": -6,
                "bfRate": 4,
                "fBFR": [
                    4,
                    4,
                    6,
                    2,
                    2,
                    4
                ]
            },
            "誠実性": {
                "facet": {
                    "向上心": 30,
                    "慎重さ": 70,
                    "忠実さ": 50,
                    "秩序性": 50,
                    "自制力": 50,
                    "自己効力感": 70
                },
                "posBFValue": 53,
                "negBFValue": 47,
                "bfVsup": 6,
                "bfRate": 4,
                "fBFR": [
                    2,
                    6,
                    4,
                    4,
                    4,
                    6
                ]
            },
            "神経症的傾向": {
                "facet": {
                    "怒り": 30,
                    "不安": 30,
                    "抑鬱傾向": 30,
                    "衝動性": 30,
                    "自意識": 30,
                    "気弱さ": 30
                },
                "posBFValue": 30,
                "negBFValue": 70,
                "bfVsup": -40,
                "bfRate": 2,
                "fBFR": [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                ]
            }
        },
        "cRecords": [
            1,
            2,
            3,
            3,
            0
        ],
        "attr": {
            "courage": 0,
            "wise": 8,
            "kind": 2,
            "aggressive": 5,
            "narcissism": 1,
            "sadism": 0,
            "machiavellism": 2,
            "psychopathy": 0,
            "playful": 0,
            "dark": 3
        }
    },
    {
        "name": "Akagi",
        "jpName": "赤城",
        "bfData": {
            "協調性": {
                "facet": {
                    "利他性": 30,
                    "協調性": 10,
                    "謙虚さ": 0,
                    "倫理観": 30,
                    "共感性": 50,
                    "素直さ": 50
                },
                "posBFValue": 28,
                "negBFValue": 72,
                "bfVsup": -44,
                "bfRate": 2,
                "fBFR": [
                    2,
                    0,
                    0,
                    2,
                    4,
                    4
                ]
            },
            "外向性": {
                "facet": {
                    "活発さ": 70,
                    "自己主張": 90,
                    "雰囲気": 70,
                    "刺激欲求": 90,
                    "心の拠り所": 50,
                    "社交性": 70
                },
                "posBFValue": 73,
                "negBFValue": 27,
                "bfVsup": 46,
                "bfRate": 6,
                "fBFR": [
                    6,
                    8,
                    6,
                    8,
                    4,
                    6
                ]
            },
            "開放性": {
                "facet": {
                    "冒険心": 70,
                    "芸術観": 50,
                    "情動性": 70,
                    "思考": 30,
                    "知的態度": 70,
                    "社会的態度": 70
                },
                "posBFValue": 60,
                "negBFValue": 40,
                "bfVsup": 20,
                "bfRate": 5,
                "fBFR": [
                    6,
                    4,
                    6,
                    2,
                    6,
                    6
                ]
            },
            "誠実性": {
                "facet": {
                    "向上心": 90,
                    "慎重さ": 30,
                    "忠実さ": 30,
                    "秩序性": 10,
                    "自制力": 70,
                    "自己効力感": 90
                },
                "posBFValue": 53,
                "negBFValue": 47,
                "bfVsup": 6,
                "bfRate": 4,
                "fBFR": [
                    8,
                    2,
                    2,
                    0,
                    6,
                    8
                ]
            },
            "神経症的傾向": {
                "facet": {
                    "怒り": 70,
                    "不安": 10,
                    "抑鬱傾向": 10,
                    "衝動性": 70,
                    "自意識": 0,
                    "気弱さ": 10
                },
                "posBFValue": 28,
                "negBFValue": 72,
                "bfVsup": -44,
                "bfRate": 2,
                "fBFR": [
                    6,
                    0,
                    0,
                    6,
                    0,
                    0
                ]
            }
        },
        "cRecords": [
            0,
            1,
            2,
            2,
            4
        ],
        "attr": {
            "courage": 7,
            "wise": 2,
            "kind": 1,
            "aggressive": 7,
            "narcissism": 2,
            "sadism": 1,
            "machiavellism": 1,
            "psychopathy": 0,
            "playful": 0,
            "dark": 4
        }
    },
    {
        "name": "Kaga",
        "jpName": "加賀",
        "bfData": {
            "協調性": {
                "facet": {
                    "利他性": 50,
                    "協調性": 10,
                    "謙虚さ": 10,
                    "倫理観": 70,
                    "共感性": 10,
                    "素直さ": 50
                },
                "posBFValue": 33,
                "negBFValue": 67,
                "bfVsup": -34,
                "bfRate": 3,
                "fBFR": [
                    4,
                    0,
                    0,
                    6,
                    0,
                    4
                ]
            },
            "外向性": {
                "facet": {
                    "活発さ": 50,
                    "自己主張": 30,
                    "雰囲気": 10,
                    "刺激欲求": 30,
                    "心の拠り所": 10,
                    "社交性": 30
                },
                "posBFValue": 27,
                "negBFValue": 73,
                "bfVsup": -46,
                "bfRate": 2,
                "fBFR": [
                    4,
                    2,
                    0,
                    2,
                    0,
                    2
                ]
            },
            "開放性": {
                "facet": {
                    "冒険心": 10,
                    "芸術観": 50,
                    "情動性": 10,
                    "思考": 10,
                    "知的態度": 10,
                    "社会的態度": 10
                },
                "posBFValue": 17,
                "negBFValue": 83,
                "bfVsup": -66,
                "bfRate": 1,
                "fBFR": [
                    0,
                    4,
                    0,
                    0,
                    0,
                    0
                ]
            },
            "誠実性": {
                "facet": {
                    "向上心": 100,
                    "慎重さ": 90,
                    "忠実さ": 90,
                    "秩序性": 90,
                    "自制力": 90,
                    "自己効力感": 90
                },
                "posBFValue": 92,
                "negBFValue": 8,
                "bfVsup": 84,
                "bfRate": 8,
                "fBFR": [
                    8,
                    8,
                    8,
                    8,
                    8,
                    8
                ]
            },
            "神経症的傾向": {
                "facet": {
                    "怒り": 50,
                    "不安": 70,
                    "抑鬱傾向": 70,
                    "衝動性": 10,
                    "自意識": 50,
                    "気弱さ": 10
                },
                "posBFValue": 43,
                "negBFValue": 57,
                "bfVsup": -14,
                "bfRate": 3,
                "fBFR": [
                    4,
                    6,
                    6,
                    0,
                    4,
                    0
                ]
            }
        },
        "cRecords": [
            2,
            2,
            1,
            3,
            2
        ],
        "attr": {
            "courage": 3,
            "wise": 5,
            "kind": 2,
            "aggressive": 7,
            "narcissism": 0,
            "sadism": 0,
            "machiavellism": 2,
            "psychopathy": 0,
            "playful": 0,
            "dark": 2
        }
    },
    {
        "name": "Nagato",
        "jpName": "長門",
        "bfData": {
            "協調性": {
                "facet": {
                    "利他性": 70,
                    "協調性": 30,
                    "謙虚さ": 10,
                    "倫理観": 70,
                    "共感性": 50,
                    "素直さ": 50
                },
                "posBFValue": 47,
                "negBFValue": 53,
                "bfVsup": -6,
                "bfRate": 4,
                "fBFR": [
                    6,
                    2,
                    0,
                    6,
                    4,
                    4
                ]
            },
            "外向性": {
                "facet": {
                    "活発さ": 70,
                    "自己主張": 50,
                    "雰囲気": 30,
                    "刺激欲求": 50,
                    "心の拠り所": 30,
                    "社交性": 50
                },
                "posBFValue": 47,
                "negBFValue": 53,
                "bfVsup": -6,
                "bfRate": 4,
                "fBFR": [
                    6,
                    4,
                    2,
                    4,
                    2,
                    4
                ]
            },
            "開放性": {
                "facet": {
                    "冒険心": 30,
                    "芸術観": 10,
                    "情動性": 30,
                    "思考": 30,
                    "知的態度": 30,
                    "社会的態度": 10
                },
                "posBFValue": 23,
                "negBFValue": 77,
                "bfVsup": -54,
                "bfRate": 2,
                "fBFR": [
                    2,
                    0,
                    2,
                    2,
                    2,
                    0
                ]
            },
            "誠実性": {
                "facet": {
                    "向上心": 90,
                    "慎重さ": 50,
                    "忠実さ": 90,
                    "秩序性": 90,
                    "自制力": 90,
                    "自己効力感": 70
                },
                "posBFValue": 80,
                "negBFValue": 20,
                "bfVsup": 60,
                "bfRate": 7,
                "fBFR": [
                    8,
                    4,
                    8,
                    8,
                    8,
                    6
                ]
            },
            "神経症的傾向": {
                "facet": {
                    "怒り": 30,
                    "不安": 30,
                    "抑鬱傾向": 30,
                    "衝動性": 50,
                    "自意識": 50,
                    "気弱さ": 10
                },
                "posBFValue": 33,
                "negBFValue": 67,
                "bfVsup": -34,
                "bfRate": 3,
                "fBFR": [
                    2,
                    2,
                    2,
                    4,
                    4,
                    0
                ]
            }
        },
        "cRecords": [
            2,
            0,
            1,
            8,
            2
        ],
        "attr": {
            "courage": 6,
            "wise": 1,
            "kind": 4,
            "aggressive": 7,
            "narcissism": 0,
            "sadism": 0,
            "machiavellism": 0,
            "psychopathy": 0,
            "playful": 0,
            "dark": 0
        }
    },
    {
        "name": "Wo-class-O",
        "jpName": "？？？",
        "bfData": {
            "協調性": {
                "facet": {
                    "利他性": 30,
                    "協調性": 10,
                    "謙虚さ": 10,
                    "倫理観": 30,
                    "共感性": 50,
                    "素直さ": 10
                },
                "posBFValue": 23,
                "negBFValue": 77,
                "bfVsup": -54,
                "bfRate": 2,
                "fBFR": [
                    2,
                    0,
                    0,
                    2,
                    4,
                    0
                ]
            },
            "外向性": {
                "facet": {
                    "活発さ": 50,
                    "自己主張": 70,
                    "雰囲気": 30,
                    "刺激欲求": 50,
                    "心の拠り所": 30,
                    "社交性": 30
                },
                "posBFValue": 43,
                "negBFValue": 57,
                "bfVsup": -14,
                "bfRate": 3,
                "fBFR": [
                    4,
                    6,
                    2,
                    4,
                    2,
                    2
                ]
            },
            "開放性": {
                "facet": {
                    "冒険心": 70,
                    "芸術観": 50,
                    "情動性": 30,
                    "思考": 50,
                    "知的態度": 90,
                    "社会的態度": 90
                },
                "posBFValue": 63,
                "negBFValue": 37,
                "bfVsup": 26,
                "bfRate": 5,
                "fBFR": [
                    6,
                    4,
                    2,
                    4,
                    8,
                    8
                ]
            },
            "誠実性": {
                "facet": {
                    "向上心": 90,
                    "慎重さ": 70,
                    "忠実さ": 90,
                    "秩序性": 90,
                    "自制力": 90,
                    "自己効力感": 70
                },
                "posBFValue": 83,
                "negBFValue": 17,
                "bfVsup": 66,
                "bfRate": 7,
                "fBFR": [
                    8,
                    6,
                    8,
                    8,
                    8,
                    6
                ]
            },
            "神経症的傾向": {
                "facet": {
                    "怒り": 50,
                    "不安": 30,
                    "抑鬱傾向": 50,
                    "衝動性": 30,
                    "自意識": 10,
                    "気弱さ": 10
                },
                "posBFValue": 30,
                "negBFValue": 70,
                "bfVsup": -40,
                "bfRate": 2,
                "fBFR": [
                    4,
                    2,
                    4,
                    2,
                    0,
                    0
                ]
            }
        },
        "cRecords": [
            2,
            1,
            7,
            2,
            6
        ],
        "attr": {
            "courage": 5,
            "wise": 5,
            "kind": 0,
            "aggressive": 5,
            "narcissism": 0,
            "sadism": 0,
            "machiavellism": 3,
            "psychopathy": 0,
            "playful": 0,
            "dark": 3
        }
    },
    {
        "name": "Le-class-L",
        "jpName": "？？？",
        "bfData": {
            "協調性": {
                "facet": {
                    "利他性": 10,
                    "協調性": 10,
                    "謙虚さ": 0,
                    "倫理観": 0,
                    "共感性": 0,
                    "素直さ": 30
                },
                "posBFValue": 8,
                "negBFValue": 92,
                "bfVsup": -84,
                "bfRate": 0,
                "fBFR": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    2
                ]
            },
            "外向性": {
                "facet": {
                    "活発さ": 50,
                    "自己主張": 70,
                    "雰囲気": 70,
                    "刺激欲求": 100,
                    "心の拠り所": 50,
                    "社交性": 50
                },
                "posBFValue": 65,
                "negBFValue": 35,
                "bfVsup": 30,
                "bfRate": 5,
                "fBFR": [
                    4,
                    6,
                    6,
                    8,
                    4,
                    4
                ]
            },
            "開放性": {
                "facet": {
                    "冒険心": 70,
                    "芸術観": 70,
                    "情動性": 70,
                    "思考": 50,
                    "知的態度": 50,
                    "社会的態度": 50
                },
                "posBFValue": 60,
                "negBFValue": 40,
                "bfVsup": 20,
                "bfRate": 5,
                "fBFR": [
                    6,
                    6,
                    6,
                    4,
                    4,
                    4
                ]
            },
            "誠実性": {
                "facet": {
                    "向上心": 50,
                    "慎重さ": 10,
                    "忠実さ": 10,
                    "秩序性": 10,
                    "自制力": 30,
                    "自己効力感": 70
                },
                "posBFValue": 30,
                "negBFValue": 70,
                "bfVsup": -40,
                "bfRate": 2,
                "fBFR": [
                    4,
                    0,
                    0,
                    0,
                    2,
                    6
                ]
            },
            "神経症的傾向": {
                "facet": {
                    "怒り": 90,
                    "不安": 10,
                    "抑鬱傾向": 50,
                    "衝動性": 90,
                    "自意識": 0,
                    "気弱さ": 10
                },
                "posBFValue": 42,
                "negBFValue": 58,
                "bfVsup": -16,
                "bfRate": 3,
                "fBFR": [
                    8,
                    0,
                    4,
                    8,
                    0,
                    0
                ]
            }
        },
        "cRecords": [
            0,
            5,
            8,
            5,
            9
        ],
        "attr": {
            "courage": 5,
            "wise": 4,
            "kind": -7,
            "aggressive": 6,
            "narcissism": 2,
            "sadism": 4,
            "machiavellism": 2,
            "psychopathy": 4,
            "playful": 0,
            "dark": 12
        }
    }
];


// 診断結果ページ表示時にそのキャラの情報を渡す
const rcdataElem = document.getElementById('rcdata');
const rcdata = (() => {
  if (!rcdataElem) {
    return;
  }

  let chara;
  for (let i = 0; i < charaInfos.length; i++) {
    const charaData = charaInfos[i];
    if (rcdataElem.textContent === charaData.name) {
      chara = charaData;
      break;
    }
  }
  return chara;
})();
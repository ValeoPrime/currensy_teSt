import React, {Component} from 'react'
import './form.css'


const Form = (props)=> {
        return (
            <React.Fragment>
                <form className="form"
                    onSubmit={props.onSubmit}
                >
                    <h1>Введите период и вид валюты</h1>
                    <label htmlFor='dateStart'>Дата начала периода</label>
                    <input id='dateStart' type='date'
                        onChange={props.onChange}
                    />
                    <label htmlFor='dateEnd'>Дата окончания периода</label>
                    <input id='dateEnd' type='date'
                        onChange={props.onChange}
                    />
                    <label htmlFor='currencyName'>Выберите валюту</label>
                    <select id='currencyName'
                        onChange={props.onChange}
                    >
                        <option value='1R01235'>1 Доллар США</option>
                        <option value='1R01239'>1 Евро</option>
                        <option value='1R01010'>1 Австралийский доллар</option>
                        <option value='1R01035'>1 Фунт стерлингов Соединенного королевства</option>
                        <option value='1R01090'>1 Белорусский рубль</option>
                        <option value='10R01215'>10 Датских крон</option>
                        <option value='10000R01310'>100 Исландских крон</option>
                        <option value='100R01335'>100 Казахстанских тенге</option>
                        <option value='1R01350'>1 Канадский доллар</option>
                        <option value='10R01535'>10 Норвежских крон</option>
                        <option value='1R01589'>1 СДР (специальные права заимствования)</option>
                        <option value='1R01625'>1 Сингапурский доллар</option>
                        <option value='1R01700'>1000000 Турецких лир</option>
                        <option value='10R01720'>10 Украинских гривен</option>
                        <option value='10R01770'>10 Шведских крон</option>
                        <option value='1R01775'>1 Швейцарский франк</option>
                        <option value='100R01820'>100 Японских иен</option>
                    </select>
                    
                    <button>Показать</button>
                </form>
            </React.Fragment>
        )
}

export default Form

{/* КОЛИЧЕСТВО ИНПУТОВ УМЕНЬШЕНО ДЛЯ КРАТКОСТИ */}
{/* 'Австрийский шиллинг  Austrian Shilling  1000R01015  40  ATS
Азербайджанский манат  Azerbaijan Manat  1R01020  944  AZN
Ангольская новая кванза  Angolan new Kwanza  100000R01040  24  AON
Армянский драм  Armenia Dram  1000R01060  51  AMD
Бельгийский франк  Belgium Franc  1000R01095  56  BEF
Болгарский лев  Bulgarian lev  1R01100  975  BGN
Бразильский реал  Brazil Real  1R01115  986  BRL
Венгерский форинт  Hungarian Forint  100R01135  348  HUF 
Гонконгский доллар  Hong Kong Dollar  10R01200  344  HKD 
Греческая драхма  Greek Drachma  10000R01205  300  GRD 
Индийская рупия  Indian Rupee  100R01270  356  INR 
Ирландский фунт  Irish Pound  100R01305  372  IEP 
Испанская песета  Spanish Peseta  10000R01315  724  ESP
Итальянская лира  Italian Lira  100000R01325  380  ITL 
Киргизский сом  Kyrgyzstan Som  100R01370  417  KGS 
Китайский юань  China Yuan  10R01375  156  CNY 
Кувейтский динар  Kuwaiti Dinar  10R01390  414  KWD 
Латвийский лат  Latvian Lat  1R01405  428  LVL
Ливанский фунт  Lebanese Pound  100000R01420  422  LBP
Литовский лит  Lithuanian Lita  1R01435  440  LTL
Молдавский лей  Moldova Lei  10R01500  498  MDL 
Немецкая марка  Deutsche Mark  1R01510  276  DEM
Немецкая марка  Deutsche Mark  100R01510  280  DEM
Нидерландский гульден  Netherlands Gulden  100R01523  528  NLG
Польский злотый  Polish Zloty  1R01565  985  PLN
Португальский эскудо  Portuguese Escudo  10000R01570  620  PTE
Румынский лей  Romanian Leu  10000R01585  642  ROL
Румынский лей  Romanian Leu  10R01585  946  RON
Суринамский доллар  Surinam Dollar  1R01665  968  SRD
Таджикский сомони  Tajikistan Ruble  10R01670  972  TJS
Таджикский рубль  Tajikistan Ruble  10R01670  762  TJR
Туркменский манат  Turkmenistan Manat  10000R01710  795  TMM 
Новый туркменский манат  New Turkmenistan Manat  1R01710  934  TMT
Узбекский сум  Uzbekistan Sum  1000R01717  860  UZS
Финляндская марка  Finnish Marka  100R01740  246  FIM
Французский франк  French Franc  1000R01750  250  FRF
Чешская крона  Czech Koruna  10R01760  203  CZK
ЭКЮ  ECU  1R01790  954  XEU
Эстонская крона  Estonian Kroon  10R01795  233  EEK
Югославский новый динар  Yugoslavian Dinar  1R01804  890  YUN 
Южноафриканский рэнд  S.African Rand  10R01810  710  ZAR
Вон Республики Корея  South Korean Won  1000R01815  410  KRW  ', */}
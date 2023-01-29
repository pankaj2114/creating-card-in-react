

const Carddata = [

    {
        id:1,
        name: 'Akbar Beerbal',
        link: 'https://www.netflix.com/in/title/81245348',
        imgsrc: "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTAwBsJgRMxD2Cs8stAZAmyrmvw5Y62Lno2gX3lsz3bj_oHPNbNGZ56NprT4SKVF3Gj1nVoW8XLkz3Xx-S9-ZsCR3sq0-DGGGaI.jpg?r=8de",
    },

    {
        id:2,
        name: ' Jamtara',
        link: 'https://www.netflix.com/in/title/81183491',
        imgsrc: 'https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdlNA7sIIj6fqL06aCEipfGTeHxAyy9wGSl5DwIwaVdEjxj3zkjeK_xnL-8YS9RELkSO5NWmJ9RSDJbwBoE57RCVe5sXw2O0ZTyjN5_UkRqSye8IOVN9gmtN6NXoAbu-_gV0uIxjI9IkCC4MDwhX5-1FieciNG3PYkXy6zANfHSsXhyMmZ3sjjN0Jy_d2bwHjqijarC5aB8XK-BG16_EBFPDGF3yMPN3nS9Ut3EP7js8zZxySbmtpkFGuUOqCJr6Qb-HK5_up_MssxUzb2m0CBof.jpg?r=7f2',
    },
    {
        id:3,
        name: ' Chhota Bheem',
        link: 'https://www.netflix.com/in/title/81088331 ',
        imgsrc: 'https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUkKd6fMlahC4KJZ4ICFeTPoTA-u2wfdI-JKngvebglcvbVv4nBHXc0tJYyA_VywXR7xEBFhRw8u1FzXWsnGYuZbsGlEPLJLnUQ.jpg?r=7e3',
    },
    {
        id:4,
        name: 'Kabhi Alvida Naa Kehna',
        link: 'https://www.netflix.com/in/title/70057651',
        imgsrc:'https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSAc5-lAX--ubDbn5ntsOv9Mw8ygvs2vxInaQJo2ZQk5VTZRDD6nk9wRdAnqZYmzw0xMEWFdEt14LMPhSRcxZPMe45JSLbTE9OE.jpg?r=e05',
    },
    {
        id:5,
        name: 'Yeh Jawaani Hai Deewani',
        link: 'https://www.netflix.com/in/title/70276515 ',
        imgsrc: 'https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbwoyrGVeIz28Z5rQ9VvzsQ-1TJv0I1u-KJ765FgTXEXiedjnYEGI_E3Bw88PPWBnGJeoTeeiLXmfrU2MiUQjuB4MEKl_Tk1YcU.jpg?r=8c0',
    },
    {
        id:6,
        name: 'Little Things',
        link: ' https://www.netflix.com/in/title/81011159',
        imgsrc: 'https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbYP7DPPct11Wu-O5VefusnQZAmzSnXCdsXGGS_iOt2EiITrRvSKu081yg6cn5MgqUFyIt2OnMUbpBGMO_uJ9Un7Thw041SGZPCVdVBDrkjvAEFeiqWCqe6p-__Qq7XBruQM.jpg?r=e02',
    },
    {
        id:4,
        name: 'Kabhi Alvida Naa Kehna',
        link: 'https://www.netflix.com/in/title/70057651',
        imgsrc:'https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSAc5-lAX--ubDbn5ntsOv9Mw8ygvs2vxInaQJo2ZQk5VTZRDD6nk9wRdAnqZYmzw0xMEWFdEt14LMPhSRcxZPMe45JSLbTE9OE.jpg?r=e05',
    },
    {
        id:5,
        name: 'Yeh Jawaani Hai Deewani',
        link: 'https://www.netflix.com/in/title/70276515 ',
        imgsrc: 'https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbwoyrGVeIz28Z5rQ9VvzsQ-1TJv0I1u-KJ765FgTXEXiedjnYEGI_E3Bw88PPWBnGJeoTeeiLXmfrU2MiUQjuB4MEKl_Tk1YcU.jpg?r=8c0',
    },
    {
        id:6,
        name: 'Little Things',
        link: ' https://www.netflix.com/in/title/81011159',
        imgsrc: 'https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbYP7DPPct11Wu-O5VefusnQZAmzSnXCdsXGGS_iOt2EiITrRvSKu081yg6cn5MgqUFyIt2OnMUbpBGMO_uJ9Un7Thw041SGZPCVdVBDrkjvAEFeiqWCqe6p-__Qq7XBruQM.jpg?r=e02',
    },
 
    {
        id:5,
        name: 'Yeh Jawaani Hai Deewani',
        link: 'https://www.netflix.com/in/title/70276515 ',
        imgsrc: 'https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbwoyrGVeIz28Z5rQ9VvzsQ-1TJv0I1u-KJ765FgTXEXiedjnYEGI_E3Bw88PPWBnGJeoTeeiLXmfrU2MiUQjuB4MEKl_Tk1YcU.jpg?r=8c0',
    },
    {
        id:6,
        name: 'Little Things',
        link: ' https://www.netflix.com/in/title/81011159',
        imgsrc: 'https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbYP7DPPct11Wu-O5VefusnQZAmzSnXCdsXGGS_iOt2EiITrRvSKu081yg6cn5MgqUFyIt2OnMUbpBGMO_uJ9Un7Thw041SGZPCVdVBDrkjvAEFeiqWCqe6p-__Qq7XBruQM.jpg?r=e02',
    },
    {
        id:4,
        name: 'Kabhi Alvida Naa Kehna',
        link: 'https://www.netflix.com/in/title/70057651',
        imgsrc:'https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSAc5-lAX--ubDbn5ntsOv9Mw8ygvs2vxInaQJo2ZQk5VTZRDD6nk9wRdAnqZYmzw0xMEWFdEt14LMPhSRcxZPMe45JSLbTE9OE.jpg?r=e05',
    },


];
export default Carddata;
const initialData={
    items:[
        {
        //    itemid:shortid.generate(),
           itemName:'Realme 10 (Crystal Purple,32Gb) (8 GB Ram)',
           itemImage:'https://cdn1.smartprix.com/rx-i8dXqSXx3-w420-h420/realme-10-pro-plus-8.jpg',
           itemPrice:'31,999'
        },
        {
            // itemid:shortid.generate(),
            itemName:'Samsung Galaxy M32 5G 128 GB (Sky Blue, 8 GB RAM)',
            itemImage:'https://img5.gadgetsnow.com/gd/images/products/additional/large/G171617_View_1/mobiles/smartphones/samsung-galaxy-m31-ocean-blue-128gb-8gb-ram-.jpg',
            itemPrice:'21,990'
        },
        {
            // itemid:shortid.generate(),
            itemName:'OnePlus Nord 3 5G (8GB RAM, 128GB, Misty Green)',
            itemImage:'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689051334/Croma%20Assets/Communication/Mobiles/Images/274674_memftp.png?tr=w-640',
            itemPrice:'33,999'
        },
        {
        //    itemid:shortid.generate(),
           itemName:'Redmi 9 Power Fiery Red 128GB 6GB RAM',
           itemImage:'https://cdn1.smartprix.com/rx-i8dXqSXx3-w420-h420/realme-10-pro-plus-8.jpg',
           itemPrice:'64,000'

        },
        {
            itemName:'Sports tshirt',
           itemImage:'https://5.imimg.com/data5/VG/DA/MY-9423828/men-s-sports-t-shirt-500x500.jpg',
           itemPrice:'50,000'

        },
        {
            itemName:'Full Sleeve Printed Round Neck T-Shirt',
            itemImage:'https://images.meesho.com/images/products/198849462/65dez_512.webp',
            itemPrice:'41,000'

        }
    ]
}
function ItemsReducer(state=initialData,action)
{
    switch(action.type)
    {
        case 'ADD_ITEM':
            return{
                ...state,items:[...state.items,action.payload]
            }
    }
    return state

}
export default ItemsReducer;
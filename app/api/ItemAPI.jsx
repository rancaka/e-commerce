var items = [
    {
        _id: 1,
        name: 'Adidas',
        price: 1000000,
        picUrl: 'http://images.solecollector.com/complex/image/upload/c_fill,q_95,w_1100/adidas-nmd-hero_kixckw.jpg'
    },
    {
        _id: 2,
        name: 'Nike',
        price: 1250000,
        picUrl: 'http://images2.nike.com/is/image/DotCom/PDP_HERO_ZOOM/511882_096_E_PREM/roshe-one-womens-shoe.jpg'
    },
    {
        _id: 3,
        name: 'Dr. Martens',
        price: 1750000,
        picUrl: 'https://d2g7c2xxqyt3nq.cloudfront.net/AW16/Homepages/Week27/1461%20prod%20shot%20-%20Desktop.jpg'
    },
    {
        _id: 4,
        name: 'Sperry',
        price: 1200000,
        picUrl: 'https://www.boscovs.com/wcsstore/boscovs/images/store/product/images/49321603607640430764027new.jpg'
    }
];

var getItems = () => {
    return items;
}

var getItem = (_id) => {
    return items.find((item) => (item._id == _id));
}

module.exports = {
    getItems: getItems,
    getItem: getItem
};
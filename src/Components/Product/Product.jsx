import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { ShoppingCart } from "lucide-react";

const Product = () => {

    const [active, setActive] = useState({
        id: 0,
        product: 'all'
    });

    const productTitle = [
        {
            id: 0,
            title: "all",
            product: 'all'
        },
        {
            id: 1,
            title: "newest",
            product: 'newest'
        },
        {
            id: 2,
            title: "trending",
            product: 'trending'
        },
        {
            id: 3,
            title: "best seller",
            product: 'best_seller'
        },
    ];



    const products = [
        {
            title: 'library stool',
            status: 'New',
            price: 'Kshs25000',
            image: '/src/assets/products/product_1.png',
            currentPrice: 'Kshs20000',
            product: 'newest',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'Kshs25000',
            image: '/src/assets/products/product_2.png',
            product: 'newest',
        },
        {
            title: 'library stool',
            status: 'New',
            price: 'Kshs25000',
            image: '/src/assets/products/product_3.png',
            currentPrice: 'Kshs20000',
            product: 'newest',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'Kshs25000',
            image: '/src/assets/products/product_4.png',
            product: 'newest',
        },

        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'Kshs25000',
            image: '/src/assets/products/product_5.png',
            product: 'trending',
        },
        {
            title: 'library stool',
            status: 'New',
            price: 'Kshs25000',
            image: '/src/assets/products/product_6.png',
            currentPrice: 'Kshs20000',
            product: 'trending',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'Kshs25000',
            image: '/src/assets/products/product_7.png',
            product: 'trending',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'Kshs25000',
            image: '/src/assets/products/product_8.png',
            product: 'trending',
        },
        {
            title: 'library stool',
            status: 'New',
            price: 'Kshs25000',
            image: '/src/assets/products/product_1.png',
            currentPrice: 'Kshs20000',
            product: 'best_seller',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'Kshs25000',
            image: '/src/assets/products/product_2.png',
            product: 'best_seller',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'Kshs25000',
            image: '/src/assets/products/product_3.png',
            product: 'best_seller',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'Kshs25000',
            image: '/src/assets/products/product_5.png',
            product: 'best_seller',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'Kshs25000',
            image: '/src/assets/products/product_6.png',
            product: 'featured',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'Kshs25000',
            image: '/src/assets/products/product_7.png',
            product: 'featured',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'Kshs25000',
            image: '/src/assets/products/product_8.png',
            product: 'featured',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'Kshs25000',
            image: '/src/assets/products/product_1.png',
            product: 'featured',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'Kshs25000',
            image: '/src/assets/products/product_2.png',
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'Kshs25000',
            image: '/src/assets/products/product_3.png',
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'Kshs25000',
            image: '/src/assets/products/product_4.png',
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'Kshs25000',
            image: '/src/assets/products/product_5.png',
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'Kshs25000',
            image: '/src/assets/products/product_6.png',
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'Kshs25000',
            image: '/src/assets/products/product_7.png',
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'Kshs25000',
            image: '/src/assets/products/product_8.png',
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'Kshs25000',
            image: '/src/assets/products/product_1.png',
            product: 'all',
        },


    ];


    const productFilter = products.filter(product => product.product === active?.product);
    console.log(productFilter);


    return (
        <div className="lg:container mx-auto">
            <div className="flex flex-col items-center justify-center">
                <SectionTitle title={'our product'} textAlign={'center'} mb={'mb-5'}></SectionTitle>


                <div className="flex items-center justify-center gap-6 mb-11">
                    {
                        productTitle?.map((title, indx) => (
                            <button key={title?.id}

                                onClick={() => setActive({
                                    id: title?.id,
                                    product: title?.product
                                })}
                                className={`text-base font-black uppercase font-inter cursor-pointer ${active?.id === indx ? 'text-[#272343]' : 'text-[#9a9caa]'
                                    }`}>
                                {title?.title}
                            </button>
                        ))
                    }
                </div>
            </div>


            <div className="grid grid-cols-4 items-center gap-6">
                    {

                    productFilter?.map((product, index) => (
                        <div key={index} className="p-4">
                            <div className="feature_image mb-4 relative">
                                <img className="w-full max-h-[312px] rounded-lg object-cover" src={product?.image} alt={product?.title} />
                                {
                                    product?.status && (
                                        <div className="absolute top-4 left-4 bg-[#007580] text-white px-2 py-1 rounded-lg">
                                            <button className="text-sm font-inter font-normal">{product?.status}</button>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="feature_content">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-base text-[#007580] capitalize font-inter font-normal mb-4">{product?.title}</h4>
                                    <button
                                        onClick={() => {
                                            // require logged-in user
                                            const hasUser = !!localStorage.getItem('user') && localStorage.getItem('loggedIn') === 'true';
                                            if (!hasUser) {
                                                alert('Please log in to add products to your cart.');
                                                return;
                                            }

                                            const raw = localStorage.getItem('cartItems');
                                            const cart = raw ? JSON.parse(raw) : [];

                                            // use title as identifier
                                            const key = product?.title;
                                            const priceNum = parseFloat(String(product?.price).replace(/[^0-9.]/g, '')) || 0;
                                            const existing = cart.find(item => item.key === key);
                                            if (existing) {
                                                existing.quantity = (existing.quantity || 0) + 1;
                                            } else {
                                                cart.push({
                                                    key,
                                                    title: product?.title,
                                                    image: product?.image,
                                                    unitPrice: priceNum,
                                                    displayPrice: product?.price,
                                                    quantity: 1
                                                });
                                            }

                                            localStorage.setItem('cartItems', JSON.stringify(cart));
                                            // notify other components
                                            window.dispatchEvent(new CustomEvent('cartUpdated'));
                                            // show toast message
                                            window.dispatchEvent(new CustomEvent('showToast', { detail: { message: 'Item added to cart' } }));
                                        }}
                                        className="bg-[#007580] h-[44px] w-[44px] rounded-lg flex items-center justify-center"
                                    ><ShoppingCart size='1.5rem' color="#fff" /></button>
                                </div>
                                <p className="text-xl flex items-center gap-2 text-[#272343] font-semibold font-inter ">
                                    {product?.price}
                                    {
                                        product?.currentPrice && (
                                            <span className="text-sm text-[#9a9caa] font-inter font-normal">{product?.currentPrice}</span>
                                        )
                                    }
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Product;
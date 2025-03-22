"use client"
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeadNavigation from '@/components/HeadNavigation';
import React, { useState } from 'react';

const ShopDetails: React.FC = () => {
  const [reviews, setReviews] = useState([
    { user: 'Jane Doe', rating: 5, comment: 'Amazing sneakers, loved the quality!' },
    { user: 'John Smith', rating: 4, comment: 'Great selection, but delivery took a bit long.' },
  ]);
  
  const [newReview, setNewReview] = useState({
    user: '',
    rating: 0,
    comment: '',
  });

  const handleReviewChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview({
      ...newReview,
      [name]: value,
    });
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.user && newReview.rating && newReview.comment) {
      setReviews([
        ...reviews,
        { user: newReview.user, rating: Number(newReview.rating), comment: newReview.comment },
      ]);
      setNewReview({ user: '', rating: 0, comment: '' }); // Reset form
    } else {
      alert('Please fill in all fields');
    }
  };

  const shop = {
    id: '1',
    name: 'Stylish Sneakers Shop',
    location: 'New York, USA',
    image: 'https://i.pinimg.com/236x/fa/c5/71/fac571b9e25da30a89669e8848bb41db.jpg',
    description: 'A shop specializing in stylish sneakers for every occasion.',
    rating: 4.5,
    productsCount: 120,
    joinDate: '2022-05-15',
    contacts: 'contact@stylishsneakers.com, (123) 456-7890',
    successfulSalesCount: 450, // New field for successful sales count
    products: [
      { name: 'Sneaker 1', price: '$50', image: 'https://via.placeholder.com/150' },
      { name: 'Sneaker 2', price: '$70', image: 'https://via.placeholder.com/150' },
      { name: 'Sneaker 3', price: '$90', image: 'https://via.placeholder.com/150' },
      { name: 'Sneaker 4', price: '$120', image: 'https://via.placeholder.com/150' },
    ],
    socialLinks: {
      facebook: 'https://facebook.com/stylishsneakers',
      instagram: 'https://instagram.com/stylishsneakers',
      twitter: 'https://twitter.com/stylishsneakers',
    },
  };

  const relatedShops = [
    { name: 'Elegant Watches', image: 'https://i.pinimg.com/236x/3d/bd/88/3dbd885b326e461ae2cdc39f0e610edf.jpg' },
    { name: 'Casual Clothing Store', image: 'https://i.pinimg.com/236x/57/62/e7/5762e7b853030df4ed346844b99e3f62.jpg' },
    { name: 'Premium Tech Gadgets', image: 'https://i.pinimg.com/236x/52/46/d6/5246d62865736d91905f64d32556ba0f.jpg' },
  ];

  return (
    <div>
    <Header />
    <HeadNavigation />
    <div className="container mx-auto p-6">
      {/* Shop Header */}
      <div className="flex items-center space-x-6 mb-8">
        <img src={shop.image} alt={shop.name} className="w-32 h-32 rounded-full object-cover" />
        <div>
          <h1 className="text-4xl font-bold text-gray-800">{shop.name}</h1>
          <p className="text-lg text-gray-600">{shop.location}</p>
          <p className="text-sm text-gray-500 mt-2">{shop.description}</p>
          <div className="flex items-center mt-4">
            <span className="text-yellow-500">⭐ {shop.rating}</span>
            <span className="ml-2 text-gray-500">({shop.productsCount} Products)</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">Joined on: {new Date(shop.joinDate).toLocaleDateString()}</p>
          <p className="text-sm text-gray-500 mt-2">Successful Sales: {shop.successfulSalesCount}</p> {/* Display successful sales count */}
        </div>
        <button className="ml-auto py-2 px-6 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition duration-300">
          Follow Shop
        </button>
      </div>

      {/* Shop Products */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Shop Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {shop.products.map((product, index) => (
          <div key={index} className="max-w-sm rounded-lg border border-gray-200 shadow-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-lg text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Shop Contacts */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact</h2>
      <p className="text-sm text-gray-600">Email: <a href={`mailto:${shop.contacts.split(', ')[0]}`} className="text-blue-500">{shop.contacts.split(', ')[0]}</a></p>
      <p className="text-sm text-gray-600">Phone: {shop.contacts.split(', ')[1]}</p>

      {/* Shop Reviews */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 mt-8">Customer Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <p className="font-semibold text-gray-800">{review.user}</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">⭐ {review.rating}</span>
            </div>
            <p className="text-gray-600 mt-2">{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Add Review Form */}
      <h2 className="text-2xl font-semibold text-gray-800 mt-8">Add Your Review</h2>
      <form onSubmit={handleSubmitReview} className="space-y-4 mt-4">
        <input
          type="text"
          name="user"
          value={newReview.user}
          onChange={handleReviewChange}
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="number"
          name="rating"
          value={newReview.rating}
          onChange={handleReviewChange}
          placeholder="Rating (1-5)"
          min="1"
          max="5"
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <textarea
          name="comment"
          value={newReview.comment}
          onChange={handleReviewChange}
          placeholder="Your Review"
          rows={4}
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Submit Review
        </button>
      </form>

      {/* Social Media Links */}
      <div className="mt-8 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Follow Us</h2>
        <div className="flex space-x-4 mt-4">
          <a href={shop.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            Facebook
          </a>
          <a href={shop.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
            Instagram
          </a>
          <a href={shop.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
            Twitter
          </a>
        </div>
      </div>

      {/* Related Shops */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 mt-8">Related Shops</h2>
      <div className="flex space-x-6 overflow-x-auto">
        {relatedShops.map((relatedShop, index) => (
          <div key={index} className="max-w-xs">
            <img src={relatedShop.image} alt={relatedShop.name} className="w-full h-40 object-cover rounded-lg" />
            <p className="mt-2 text-center text-gray-800 font-semibold">{relatedShop.name}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default ShopDetails;

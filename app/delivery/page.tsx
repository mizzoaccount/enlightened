import DeliveryDashboard from '../../components/DeliveryDashboard';

import Header from '@/components/Header';
import HeadNavigation from '@/components/HeadNavigation';
import Footer from '@/components/Footer';


const DeliveryPage = () => {
  return (
    <div>
    <Header />
    <HeadNavigation />
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <DeliveryDashboard />
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default DeliveryPage;

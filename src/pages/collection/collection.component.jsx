import { useParams } from 'react-router-dom';
import './collection.styles.css';
import CollectionItem from '../../components/collection-item/collection-item.component';

const shopData = {
  'groceries': {
    id: 1,
    title: 'Groceries & Staples',
    routeName: 'groceries',
    imageUrl: 'https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?w=500&q=80',
    items: [
      {
        id: 1,
        name: 'Aashirvaad Whole Wheat Atta (5kg)',
        imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=80',
        price: 240
      },
      {
        id: 2,
        name: 'Tata Salt (1kg)',
        imageUrl: 'https://images.unsplash.com/photo-1607423640807-ae9666be61c8?w=400&q=80',
        price: 25
      },
      {
        id: 3,
        name: 'Daawat Basmati Rice (1kg)',
        imageUrl: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400&q=80',
        price: 150
      },
      {
        id: 4,
        name: 'Tata Sampann Toor Dal (1kg)',
        imageUrl: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&q=80',
        price: 130
      },
      {
        id: 5,
        name: 'Fortune Sunlite Refined Oil (1L)',
        imageUrl: 'https://images.unsplash.com/photo-1608181831659-7f2e7c6a2b90?w=400&q=80',
        price: 165
      },
      {
        id: 6,
        name: 'Madhur Pure Sugar (1kg)',
        imageUrl: 'https://images.unsplash.com/photo-1614959541555-4f515d4872f2?w=400&q=80',
        price: 60
      },
      {
        id: 7,
        name: 'Everest Turmeric Powder (100g)',
        imageUrl: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&q=80',
        price: 35
      },
      {
        id: 8,
        name: 'Amul Pure Ghee (500ml)',
        imageUrl: 'https://images.unsplash.com/photo-1627916607164-7b20241db935?w=400&q=80',
        price: 280
      },
      {
        id: 9,
        name: 'Rajdhani Besan (500g)',
        imageUrl: 'https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?w=400&q=80',
        price: 55
      },
      {
        id: 100,
        name: 'Fortune Mustard Oil (1L)',
        imageUrl: 'https://images.unsplash.com/photo-1474979266404-7caddbed646e?w=400&q=80',
        price: 180
      },
      {
        id: 101,
        name: 'Nutrela Soya Chunks (200g)',
        imageUrl: 'https://images.unsplash.com/photo-1621857996580-2c262a265691?w=400&q=80',
        price: 45
      }
    ]
  },
  'snacks': {
    id: 2,
    title: 'Snacks & Instant Food',
    routeName: 'snacks',
    imageUrl: 'https://images.unsplash.com/photo-1621939514649-28b12e816751?w=500&q=80',
    items: [
      {
        id: 10,
        name: 'Maggi 2-Minute Noodles',
        imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80',
        price: 55
      },
      {
        id: 11,
        name: 'Britannia Good Day Cookies',
        imageUrl: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80',
        price: 30
      },
      {
        id: 12,
        name: 'Lays India\'s Magic Masala',
        imageUrl: 'https://images.unsplash.com/photo-1600952841320-db92ec4047ca?w=400&q=80',
        price: 20
      },
      {
        id: 13,
        name: 'Kellogg\'s Corn Flakes',
        imageUrl: 'https://images.unsplash.com/photo-1521367944990-e7a8f8b52b4e?w=400&q=80',
        price: 195
      },
      {
        id: 14,
        name: 'Kissan Mixed Fruit Jam (500g)',
        imageUrl: 'https://images.unsplash.com/photo-1590403756858-64c8d57d97eb?w=400&q=80',
        price: 130
      },
      {
        id: 15,
        name: 'Amul Dark Chocolate',
        imageUrl: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&q=80',
        price: 110
      },
      {
        id: 16,
        name: 'Pintola Peanut Butter (350g)',
        imageUrl: 'https://images.unsplash.com/photo-1524823223788-2943389d023b?w=400&q=80',
        price: 160
      },
      {
        id: 17,
        name: 'Act II Butter Popcorn',
        imageUrl: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=400&q=80',
        price: 35
      },
      {
        id: 102,
        name: 'Haldiram\'s Bhujia Sev',
        imageUrl: 'https://images.unsplash.com/photo-1566455172283-c22ae9874836?w=400&q=80',
        price: 85
      },
      {
        id: 103,
        name: 'Quaker Oats (1kg)',
        imageUrl: 'https://images.unsplash.com/photo-1614059639745-f933d7b897eb?w=400&q=80',
        price: 190
      }
    ]
  },
  'beverages': {
    id: 3,
    title: 'Beverages',
    routeName: 'beverages',
    imageUrl: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&q=80',
    items: [
      {
        id: 18,
        name: 'Tata Tea Premium',
        imageUrl: 'https://images.unsplash.com/photo-1597318130284-c6ce4a8c0a65?w=400&q=80',
        price: 280
      },
      {
        id: 19,
        name: 'Nescafe Classic Coffee',
        imageUrl: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&q=80',
        price: 145
      },
      {
        id: 20,
        name: 'Coca-Cola (750ml)',
        imageUrl: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&q=80',
        price: 40
      },
      {
        id: 21,
        name: 'Tropicana Orange Juice (1L)',
        imageUrl: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=80',
        price: 110
      },
      {
        id: 22,
        name: 'Lipton Green Tea (25 Bags)',
        imageUrl: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=400&q=80',
        price: 160
      },
      {
        id: 104,
        name: 'Red Bull Energy Drink',
        imageUrl: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&q=80',
        price: 115
      },
      {
        id: 105,
        name: 'Bisleri Mineral Water (1L)',
        imageUrl: 'https://images.unsplash.com/photo-1560715701-1e3e547372c3?w=400&q=80',
        price: 20
      },
      {
        id: 106,
        name: 'Amul Taaza Milk (1L)',
        imageUrl: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80',
        price: 72
      },
      {
        id: 107,
        name: 'Bournvita Health Drink',
        imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&q=80',
        price: 340
      }
    ]
  },
  'household': {
    id: 4,
    title: 'Household & Cleaning',
    routeName: 'household',
    imageUrl: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=500&q=80',
    items: [
      {
        id: 23,
        name: 'Surf Excel Easy Wash',
        imageUrl: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400&q=80',
        price: 135
      },
      {
        id: 24,
        name: 'Vim Dishwash Bar',
        imageUrl: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&q=80',
        price: 25
      },
      {
        id: 26,
        name: 'Lizol Floor Cleaner',
        imageUrl: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400&q=80',
        price: 189
      },
      {
        id: 27,
        name: 'Harpic Toilet Cleaner',
        imageUrl: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&q=80',
        price: 95
      },
      {
        id: 28,
        name: 'Godrej Aer Room Spray',
        imageUrl: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80',
        price: 140
      },
      {
        id: 29,
        name: 'Scotch Brite Scrub Pad',
        imageUrl: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400&q=80',
        price: 15
      },
      {
        id: 108,
        name: 'Dettol Antiseptic Liquid',
        imageUrl: 'https://images.unsplash.com/photo-1584813470613-5b1c1cad3d69?w=400&q=80',
        price: 125
      },
      {
        id: 109,
        name: 'Odonil Bathroom Freshener',
        imageUrl: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=400&q=80',
        price: 55
      },
      {
        id: 110,
        name: 'Colin Glass Cleaner',
        imageUrl: 'https://images.unsplash.com/photo-1626233488424-601d24c3c3a4?w=400&q=80',
        price: 98
      }
    ]
  },
  'personalcare': {
    id: 5,
    title: 'Personal Care',
    routeName: 'personalcare',
    imageUrl: 'https://png.pngtree.com/background/20250521/original/pngtree-a-beautiful-woman-washing-her-face-and-smiling-with-water-splashes-picture-image_15997201.jpg',
    items: [
      {
        id: 30,
        name: 'Lux Rose Soap',
        imageUrl: 'https://images.unsplash.com/photo-1588016892374-d7bb3e8e4e4e?w=400&q=80',
        price: 40
      },
      {
        id: 31,
        name: 'Dove Shampoo',
        imageUrl: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&q=80',
        price: 250
      },
      {
        id: 32,
        name: 'Colgate Toothpaste',
        imageUrl: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400&q=80',
        price: 105
      },
      {
        id: 33,
        name: 'Garnier Face Wash',
        imageUrl: 'https://images.unsplash.com/photo-1556228720-1957be83f3bf?w=400&q=80',
        price: 180
      },
      {
        id: 34,
        name: 'Nivea Body Lotion',
        imageUrl: 'https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?w=400&q=80',
        price: 299
      },
      {
        id: 35,
        name: 'Parachute Coconut Oil',
        imageUrl: 'https://images.unsplash.com/photo-1596525740882-9539322237d6?w=400&q=80',
        price: 110
      },
      {
        id: 111,
        name: 'Gillette Shaving Foam',
        imageUrl: 'https://images.unsplash.com/photo-1605221379796-6e47f9c8789d?w=400&q=80',
        price: 195
      },
      {
        id: 112,
        name: 'Dettol Hand Wash (Refill)',
        imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80',
        price: 45
      },
      {
        id: 113,
        name: 'Fogg Deodorant Spray',
        imageUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80',
        price: 199
      }
    ]
  }
};

function CollectionPage() {
    const { category } = useParams();
    console.log("Category: ", category);
    const collection = shopData[category];

    if (!collection) {
        return (
            <div className="collection-page">
                <div className="not-found">
                    <h2>Category Not Found</h2>
                    <p>The category you're looking for doesn't exist.</p>
                    <a href="/shop" className="back-link">← Back to Shop</a>
                </div>
            </div>
        );
    }

    const { title, items } = collection;

    return (
        <div className="collection-page">
            <div className="collection-header">
                <h1 className="collection-page-title">{title}</h1>
                <p className="collection-item-count">{items.length} Products</p>
            </div>
            <div className="collection-items-grid">
                {items.map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default CollectionPage;
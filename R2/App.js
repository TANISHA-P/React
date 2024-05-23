import React from "react"
import ReactDOM from "react-dom/client"

const Header = () => {
    return (
        <div className="header-layout">
            <div className="logo">
                <img id="logo-img" src="https://shorturl.at/8R2rB"></img>
            </div>
            <div className="nav-links">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const RestaurantCard = (props) => {
    const {resData} = props;
    let cuisineList = [];
    resData.info.cuisine.forEach(element => {
        cuisineList.push(element.name);
    });

    return (
            <div className="res-card">
                <div className="res-image">
                    <img id="image" src={resData.info.image.url}></img>
                </div>
                <div className="res-info">
                    <div className="division1">
                        <h2 id="res-name">{resData.info.name}</h2>
                        <p id="res-cuisine">{cuisineList.join(",")}</p>
                    </div>
                    <div className="division2">
                        <h6 id="res-rating">{resData.info.rating.aggregate_rating}</h6>
                        <p id="res-deliveryTime">{resData.order.deliveryTime}</p>
                    </div>
                </div>
            </div>
    );
}

const resList = [
    {
        "type": "restaurant",
        "info": {
            "resId": 38405,
            "name": "Guru Kripa",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/5\/38405\/65501d8164d27a7ce9c5cab0d571c278_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/5\/38405\/65501d8164d27a7ce9c5cab0d571c278_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.3",
                "rating_text": "4.3",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "68.5K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.3",
                        "reviewCount": "3,841",
                        "reviewTextSmall": "3,841 Reviews",
                        "subtext": "3,841 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.3",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.2",
                        "reviewCount": "64.7K",
                        "reviewTextSmall": "64.7K Reviews",
                        "subtext": "64.7K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.2",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9350 for two"
            },
            "cfo": {
                "text": "\u20b9100 for one"
            },
            "locality": {
                "name": "Sion, Mumbai",
                "address": "40, Road 24, Sion, Mumbai",
                "localityUrl": "mumbai\/sion-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/north-indian\/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxNVwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/mithai\/",
                    "name": "Mithai"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/fast-food\/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/south-indian\/",
                    "name": "South Indian"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/sandwich\/",
                    "name": "Sandwich"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/street-food\/",
                    "name": "Street Food"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyM1wiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/rolls\/",
                    "name": "Rolls"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/desserts\/",
                    "name": "Desserts"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9100 for one"
            }
        },
        "order": {
            "deliveryTime": "32 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/mumbai\/guru-kripa-sion\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/mumbai\/guru-kripa-sion\/order",
            "clickActionDeeplink": ""
        },
        "distance": "2.9 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"f606d166-5a84-4868-a5b9-f3d78dbd7963\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646509572521984\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"38405\",\"element_type\":\"listing\",\"rank\":1}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "10% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20055299,
            "name": "Ribbons and Balloons - The Cake Shop",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/20055299\/6d40ee2aed33e60ef147666dfec3c31a_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/20055299\/6d40ee2aed33e60ef147666dfec3c31a_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.2",
                "rating_text": "4.2",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "918",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.2",
                        "reviewCount": "918",
                        "reviewTextSmall": "918 Reviews",
                        "subtext": "918 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.2",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9400 for two"
            },
            "cfo": {
                "text": "\u20b9100 for one"
            },
            "locality": {
                "name": "Mahim, Mumbai",
                "address": "Plot-141, Sonawadi Chamber, Lady Jamshedji Road, Mahim, Mumbai",
                "localityUrl": "mumbai\/mahim-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/bakery\/",
                    "name": "Bakery"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/desserts\/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/sandwich\/",
                    "name": "Sandwich"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyM1wiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/rolls\/",
                    "name": "Rolls"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/fast-food\/",
                    "name": "Fast Food"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9100 for one"
            }
        },
        "order": {
            "deliveryTime": "20 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/mumbai\/ribbons-and-balloons-the-cake-shop-mahim\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/mumbai\/ribbons-and-balloons-the-cake-shop-mahim\/order",
            "clickActionDeeplink": ""
        },
        "distance": "2.3 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"f606d166-5a84-4868-a5b9-f3d78dbd7963\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646509572521984\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20055299\",\"element_type\":\"listing\",\"rank\":2}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "\u20b9125 OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19669070,
            "name": "Wendy's Burgers",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/0\/19669070\/cd6ce0f63cbf06f343de64700ee68ffe_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/0\/19669070\/cd6ce0f63cbf06f343de64700ee68ffe_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.0",
                "rating_text": "4.0",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "4,543",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.0",
                        "reviewCount": "4,543",
                        "reviewTextSmall": "4,543 Reviews",
                        "subtext": "4,543 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.0",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9400 for two"
            },
            "cfo": {
                "text": "\u20b9100 for one"
            },
            "locality": {
                "name": "Tardeo, Mumbai",
                "address": "Shop 12, 13, 14, Ground Floor, Tardeo Lamington Road, Near Tardeo, Mumbai",
                "localityUrl": "mumbai\/tardeo-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/burger\/",
                    "name": "Burger"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/fast-food\/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMVwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/american\/",
                    "name": "American"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9100 for one"
            }
        },
        "order": {
            "deliveryTime": "41 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/mumbai\/wendys-burgers-tardeo\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/mumbai\/wendys-burgers-tardeo\/order",
            "clickActionDeeplink": ""
        },
        "distance": "6.9 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"f606d166-5a84-4868-a5b9-f3d78dbd7963\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646509572521984\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19669070\",\"element_type\":\"listing\",\"rank\":3}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "30% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19562454,
            "name": "NIC Ice Creams",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/9\/19314639\/3273e33992ff500987a70a2c0217d8e4_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/9\/19314639\/3273e33992ff500987a70a2c0217d8e4_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.4",
                "rating_text": "4.4",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "3,964",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.4",
                        "reviewCount": "3,964",
                        "reviewTextSmall": "3,964 Reviews",
                        "subtext": "3,964 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.4",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9200 for two"
            },
            "cfo": {
                "text": "\u20b9100 for one"
            },
            "locality": {
                "name": "Matunga East, Mumbai",
                "address": "Shop-14, Ground Floor, Jay Mangal Chs, Rafi Ahmed Kidwai Road, Matunga East, Mumbai",
                "localityUrl": "mumbai\/matunga-east-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/ice-cream\/",
                    "name": "Ice Cream"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9100 for one"
            }
        },
        "order": {
            "deliveryTime": "14 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/mumbai\/nic-ice-creams-matunga-east\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/mumbai\/nic-ice-creams-matunga-east\/order",
            "clickActionDeeplink": ""
        },
        "distance": "957 m",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"f606d166-5a84-4868-a5b9-f3d78dbd7963\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646509572521984\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19562454\",\"element_type\":\"listing\",\"rank\":4}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20666571,
            "name": "Monginis",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/5\/36605\/74a9674963ddd367fb20a862365fee3e_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/5\/36605\/74a9674963ddd367fb20a862365fee3e_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.2",
                "rating_text": "4.2",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "112",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.2",
                        "reviewCount": "112",
                        "reviewTextSmall": "112 Reviews",
                        "subtext": "112 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.2",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9600 for two"
            },
            "cfo": {
                "text": "\u20b9100 for one"
            },
            "locality": {
                "name": "Dadar West, Mumbai",
                "address": "Shop B-5, Ground Floor, D.L. Vaidya Road, Dadar West, Mumbai",
                "localityUrl": "mumbai\/dadar-west-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/bakery\/",
                    "name": "Bakery"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/desserts\/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/fast-food\/",
                    "name": "Fast Food"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9100 for one"
            }
        },
        "order": {
            "deliveryTime": "21 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/mumbai\/monginis-4-dadar-west\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/mumbai\/monginis-4-dadar-west\/order",
            "clickActionDeeplink": ""
        },
        "distance": "1.8 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"f606d166-5a84-4868-a5b9-f3d78dbd7963\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646509572521984\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20666571\",\"element_type\":\"listing\",\"rank\":5}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19699605,
            "name": "Sandwizzaa",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/9\/36009\/a9d698b47404e7932e66f753a3755a21_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/9\/36009\/a9d698b47404e7932e66f753a3755a21_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.2",
                "rating_text": "4.2",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "5,739",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.2",
                        "reviewCount": "5,739",
                        "reviewTextSmall": "5,739 Reviews",
                        "subtext": "5,739 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.2",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9500 for two"
            },
            "cfo": {
                "text": "\u20b9100 for one"
            },
            "locality": {
                "name": "Dadar Shivaji Park, Mumbai",
                "address": "1, Plot 81, Dev Kunj, Keluskar Road, Dadar Shivaji Park, Mumbai",
                "localityUrl": "mumbai\/dadar-shivaji-park-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/sandwich\/",
                    "name": "Sandwich"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/fast-food\/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/coffee\/",
                    "name": "Coffee"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/shake\/",
                    "name": "Shake"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/beverages\/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9100 for one"
            }
        },
        "order": {
            "deliveryTime": "28 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/mumbai\/sandwizzaa-dadar-shivaji-park\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/mumbai\/sandwizzaa-dadar-shivaji-park\/order",
            "clickActionDeeplink": ""
        },
        "distance": "2.3 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"f606d166-5a84-4868-a5b9-f3d78dbd7963\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646509572521984\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19699605\",\"element_type\":\"listing\",\"rank\":6}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "\u20b9150 OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 21152686,
            "name": "Shawarmaji",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/6\/21152686\/775d351e74ec4df0c05f2a539b236215_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/6\/21152686\/775d351e74ec4df0c05f2a539b236215_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.1",
                "rating_text": "4.1",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "53",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.1",
                        "reviewCount": "53",
                        "reviewTextSmall": "53 Reviews",
                        "subtext": "53 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.1",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9350 for two"
            },
            "cfo": {
                "text": "\u20b9100 for one"
            },
            "locality": {
                "name": "Matunga East, Mumbai",
                "address": "Plot 471, Ground Floor, Radha Building, King Circle, H Adenwala Road, Matunga East, Mumbai",
                "localityUrl": "mumbai\/matunga-east-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTYxXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/shawarma\/",
                    "name": "Shawarma"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTk4XCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/salad\/",
                    "name": "Salad"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/fast-food\/",
                    "name": "Fast Food"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9100 for one"
            }
        },
        "order": {
            "deliveryTime": "19 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/mumbai\/shawarmaji-matunga-east\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/mumbai\/shawarmaji-matunga-east\/order",
            "clickActionDeeplink": ""
        },
        "distance": "925 m",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"f606d166-5a84-4868-a5b9-f3d78dbd7963\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646509572521984\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21152686\",\"element_type\":\"listing\",\"rank\":7}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 18691939,
            "name": "Deliure & The Eatrium",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/5\/18140605\/60e2168970340588c9e8e710ac1c24e7_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/5\/18140605\/60e2168970340588c9e8e710ac1c24e7_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.1",
                "rating_text": "4.1",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "19.2K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.8",
                        "reviewCount": "160",
                        "reviewTextSmall": "160 Reviews",
                        "subtext": "160 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.8",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.3",
                        "reviewCount": "19.1K",
                        "reviewTextSmall": "19.1K Reviews",
                        "subtext": "19.1K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.3",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9600 for two"
            },
            "cfo": {
                "text": "\u20b9100 for one"
            },
            "locality": {
                "name": "Mahim, Mumbai",
                "address": "Ground Floor, Geetanjali Building, LJ Road, Mahim, Mumbai",
                "localityUrl": "mumbai\/mahim-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/bakery\/",
                    "name": "Bakery"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/fast-food\/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/pizza\/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/sandwich\/",
                    "name": "Sandwich"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/street-food\/",
                    "name": "Street Food"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/desserts\/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/beverages\/",
                    "name": "Beverages"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/shake\/",
                    "name": "Shake"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9100 for one"
            }
        },
        "order": {
            "deliveryTime": "31 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/mumbai\/deliure-the-eatrium-mahim\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/mumbai\/deliure-the-eatrium-mahim\/order",
            "clickActionDeeplink": ""
        },
        "distance": "2.9 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"f606d166-5a84-4868-a5b9-f3d78dbd7963\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646509572521984\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18691939\",\"element_type\":\"listing\",\"rank\":8}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "\u20b9175 OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 18467933,
            "name": "Oven Story Pizza - Standout Toppings",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/0\/18386400\/35a358a2f62f5f8cd33de6e6fc140dbd_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/0\/18386400\/35a358a2f62f5f8cd33de6e6fc140dbd_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.8",
                "rating_text": "3.8",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "3,897",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.8",
                        "reviewCount": "3,897",
                        "reviewTextSmall": "3,897 Reviews",
                        "subtext": "3,897 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.8",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9600 for two"
            },
            "cfo": {
                "text": "\u20b9100 for one"
            },
            "locality": {
                "name": "Parel, Mumbai",
                "address": "Shop 10, Dr. B A Road, Near Premier Cinema, Parel, Mumbai",
                "localityUrl": "mumbai\/parel-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/pizza\/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/italian\/",
                    "name": "Italian"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/pasta\/",
                    "name": "Pasta"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9100 for one"
            }
        },
        "order": {
            "deliveryTime": "36 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/mumbai\/oven-story-pizza-standout-toppings-parel\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/mumbai\/oven-story-pizza-standout-toppings-parel\/order",
            "clickActionDeeplink": ""
        },
        "distance": "2 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"f606d166-5a84-4868-a5b9-f3d78dbd7963\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646509572521984\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18467933\",\"element_type\":\"listing\",\"rank\":9}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "60% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20185992,
            "name": "Starbucks Coffee",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/4\/43344\/163aa2d5720ce597203370afb1357c90_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/4\/43344\/163aa2d5720ce597203370afb1357c90_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.8",
                "rating_text": "3.8",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "898",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.4",
                        "reviewCount": "9",
                        "reviewTextSmall": "9 Reviews",
                        "subtext": "9 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.4",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.2",
                        "reviewCount": "889",
                        "reviewTextSmall": "889 Reviews",
                        "subtext": "889 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.2",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b91,000 for two"
            },
            "cfo": {
                "text": "\u20b9100 for one"
            },
            "locality": {
                "name": "Matunga East, Mumbai",
                "address": "Shop G2, Ground Floor, Nathalal Parekh Marg, Khalsa College, Matunga East, Mumbai",
                "localityUrl": "mumbai\/matunga-east-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/cafes\/",
                    "name": "Cafe"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/coffee\/",
                    "name": "Coffee"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/beverages\/",
                    "name": "Beverages"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/fast-food\/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/desserts\/",
                    "name": "Desserts"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9100 for one"
            }
        },
        "order": {
            "deliveryTime": "14 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/mumbai\/starbucks-coffee-matunga-east\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/mumbai\/starbucks-coffee-matunga-east\/order",
            "clickActionDeeplink": ""
        },
        "distance": "907 m",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"f606d166-5a84-4868-a5b9-f3d78dbd7963\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646509572521984\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20185992\",\"element_type\":\"listing\",\"rank\":10}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "20% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20749244,
            "name": "House Of Biryan- Biryani, Kepsa And More",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/8\/20494988\/5c097a22a5554cb7196b0ed21971cca6_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/8\/20494988\/5c097a22a5554cb7196b0ed21971cca6_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.3",
                "rating_text": "4.3",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "3,353",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.3",
                        "reviewCount": "3,353",
                        "reviewTextSmall": "3,353 Reviews",
                        "subtext": "3,353 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.3",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9800 for two"
            },
            "cfo": {
                "text": "\u20b9100 for one"
            },
            "locality": {
                "name": "Hill Road, Bandra West, Mumbai",
                "address": "170\/A, Shop 24, Baxubhai Mansion, SV Road, Hill Road, Bandra West, Mumbai",
                "localityUrl": "mumbai\/hill-road-bandra-west-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/biryani\/",
                    "name": "Biryani"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/kebab\/",
                    "name": "Kebab"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyM1wiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/rolls\/",
                    "name": "Rolls"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9100 for one"
            }
        },
        "order": {
            "deliveryTime": "32 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/mumbai\/house-of-biryan-biryani-kepsa-and-more-hill-road-bandra-west\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/mumbai\/house-of-biryan-biryani-kepsa-and-more-hill-road-bandra-west\/order",
            "clickActionDeeplink": ""
        },
        "distance": "4.5 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"f606d166-5a84-4868-a5b9-f3d78dbd7963\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646509572521984\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20749244\",\"element_type\":\"listing\",\"rank\":11}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "\u20b9150 OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20277125,
            "name": "Tibb's Frankie - Serving Rolls Since 1969",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/2\/38302\/36901ac682160a491299096f47701b20_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/2\/38302\/36901ac682160a491299096f47701b20_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.7",
                "rating_text": "3.7",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "556",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.7",
                        "reviewCount": "556",
                        "reviewTextSmall": "556 Reviews",
                        "subtext": "556 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.7",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9300 for two"
            },
            "cfo": {
                "text": "\u20b9100 for one"
            },
            "locality": {
                "name": "Wadala, Mumbai",
                "address": "Shop 2, Plot 171, Jaybharati Building, N.M.P. Marg, Near UDCT College, Wadala, Mumbai",
                "localityUrl": "mumbai\/wadala-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyM1wiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/rolls\/",
                    "name": "Rolls"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyNFwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/wraps\/",
                    "name": "Wraps"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTYxXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/mumbai\/restaurants\/shawarma\/",
                    "name": "Shawarma"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9100 for one"
            }
        },
        "order": {
            "deliveryTime": "21 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/mumbai\/tibbs-frankie-serving-rolls-since-1969-wadala\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/mumbai\/tibbs-frankie-serving-rolls-since-1969-wadala\/order",
            "clickActionDeeplink": ""
        },
        "distance": "435 m",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"f606d166-5a84-4868-a5b9-f3d78dbd7963\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646509572521984\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20277125\",\"element_type\":\"listing\",\"rank\":12}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "\u20b9250 OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    }
];

const Body = () => {
    return (
        <div className="body-layout">
            <div className="search-container">Search</div>
            <div className="res-containers">
                {resList.map(
                    (restaurant) => (<RestaurantCard key={restaurant.info.resId} resData = {restaurant} />)
                )}
            </div>
        </div>
    );
}
const App = () => {
    return (
        <div className="app-layout">
            <Header/>
            <Body />
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>)
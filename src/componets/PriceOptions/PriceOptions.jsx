import PriceOption from "../PriceOption/PriceOption";



const PriceOptions = () => {

        const priceOptions =[
                  {
                    "id": 1,
                    "name": "Basic",
                    "price": "$29.99",
                    "features": [
                      "Access to gym equipment",
                      "1 fitness class per month",
                      "Locker room access",
                      "Free gym orientation session",
                      "Access during staffed hours"
                    ]
                  },
                  {
                    "id": 2,
                    "name": "Premium",
                    "price": "$49.99",
                    "features": [
                      "Access to gym equipment",
                      "Unlimited fitness classes",
                      "Locker room access",
                      "Sauna access",
                      "1 Personal Training session per month",
                      "Guest passes (2 per month)",
                      "Online workout library access",
                      "Access to multiple locations"
                    ]
                  },
                  {
                    "id": 3,
                    "name": "Elite",
                    "price": "$79.99",
                    "features": [
                      "24/7 gym access",
                      "Access to all gym equipment",
                      "Unlimited fitness classes",
                      "Locker room access",
                      "Sauna and pool access",
                      "Unlimited personal training sessions",
                      "Nutrition planning assistance",
                      "Priority booking for classes",
                      "Massage and spa services discount",
                      "Dedicated locker",
                      "Participation in members-only events",
                      "Access to VIP lounge"
                    ]
                  }
                ]
            
              
        

    return (
        <div className="m-12">

            <h2 className="text-5xl">Best price in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
            
        </div>
    );
};

export default PriceOptions;
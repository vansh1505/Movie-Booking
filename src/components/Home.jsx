import React from 'react'
import Card from './Card'

const Home = () => {
    return (
        <div className="flex justify-center p-4 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card title="Housefull 3" desc="A father doesn't want his three daughters to get married. Now, it's up to three men to try to and convince the father that they're a good fit for his daughters." img="https://static.toiimg.com/thumb/msid-100727197,imgsize-58436,width-400,resizemode-4/100727197.jpg" />
                <Card title="Housefull 3" desc="A father doesn't want his three daughters to get married. Now, it's up to three men to try to and convince the father that they're a good fit for his daughters." img="https://static.toiimg.com/thumb/msid-100727197,imgsize-58436,width-400,resizemode-4/100727197.jpg" />
                <Card title="Rocketry: The Nambi Effect" desc="'Indian biographical drama that is based on the life of Nambi Narayanan, a former researcher and aerospace engineer with the ISRO who was charged with espionage in 1994." img="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202206/rocketry_1200-sixteen_nine-sixteen_nine.jpg?size=948:533" />
            </div>
        </div>
    )
}

export default Home
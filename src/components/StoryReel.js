import React from 'react';
import Story from './Story';
import './StoryReel.css';

function StoryReel(){
    return <div className="storyReel">
        <Story      
            image= "https://static.guim.co.uk/sys-images/Education/Pix/pictures/2012/3/29/1333033175066/A-traditionally-clothed-G-008.jpg"
            profileSrc=" "
            title="Bernie Douglas"
            />
         <Story      
            image= "https://s3-eu-west-1.amazonaws.com/onlinebingo/upload/how-bingo-helps-the-elderly-min-BxUuBeI/how-bingo-helps-the-elderly-min"
            profileSrc=" "
            title="Lola Jackass"
            />
         <Story      
            image= "https://www.bethesdahealth.org/wp-content/uploads/2019/01/iStock-638906934.jpg"
            profileSrc=" "
            title="Doug De Old "
            />
         <Story      
            image= "https://blog.joeydgolf.com/hs-fs/hubfs/shutterstock_320938799.jpg?width=1000&name=shutterstock_320938799.jpg"
            profileSrc=" "
            title="John Creepy"
            />       
        <Story
            image="https://mymodernmet.com/wp/wp-content/uploads/archive/gd8SdV6lYw2TP5sAcGsc_goldenyears_7.jpg"
            profileSrc=" " 
            title="Elga Mosh"    
            />
        
    </div>
}

export default StoryReel;
import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.styles.scss'
const MenuItem =({title,imageurl,size,history,linkUrl,match}) =>{

   return <div className ={`${size} menu-item`} 
   onClick={()=>history.push(`${match.url}${linkUrl}`)}>
       <div className='background-image' 
       style={{backgroundImage: `url(${imageurl})`}}/> 
                <div className='content'>
                    <h1 className='title'>
                        {title}
                    </h1>
                    <span className='subtitle'>Shop now</span>
                </div>
            </div>

}

export default withRouter(MenuItem);

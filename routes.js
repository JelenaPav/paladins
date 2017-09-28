//import Home from './src/components/Home.vue';
//import About from './src/components/About.vue';
//import Features from './src/components/Features.vue';
//import Media from './src/components/Media.vue';
//import Download from './src/components/Download.vue';
//import Contact from './src/components/Contact.vue';
//import Body from './src/components/Body.vue';
//import Character1 from './src/components/Character1.vue';
//import Character2 from './src/components/Character2.vue';
//import Character3 from './src/components/Character3.vue';
//import Character4 from './src/components/Character4.vue';
//import Character5 from './src/components/Character5.vue';
//import Character6 from './src/components/Character6.vue';
//import ShareModal from './src/components/ShareModal.vue';

const Home = resolve => {
    require.ensure(['./src/components/Home.vue'], () => {
        resolve(require('./src/components/Home.vue'));
        
    },'body');
    
};
const About = resolve => {
    require.ensure(['./src/components/About.vue'], () => {
        resolve(require('./src/components/About.vue'));
        
    },'body');
    
};
const Features = resolve => {
    require.ensure(['./src/components/Features.vue'], () => {
        resolve(require('./src/components/Features.vue'));
        
    },'body');
    
};
const Media = resolve => {
    require.ensure(['./src/components/Media.vue'], () => {
        resolve(require('./src/components/Media.vue'));
        
    },'body');
    
};
const Download = resolve => {
    require.ensure(['./src/components/Download.vue'], () => {
        resolve(require('./src/components/Download.vue'));
        
    },'body');
    
};
const Contact = resolve => {
    require.ensure(['./src/components/Contact.vue'], () => {
        resolve(require('./src/components/Contact.vue'));
        
    },'body');
    
};

const Body = resolve => {
    require.ensure(['./src/components/Body.vue'], () => {
        resolve(require('./src/components/Body.vue'));
        
    }, 'body');
    
};

const Character1 = resolve => {
    require.ensure(['./src/components/Character1.vue'], () => {
        resolve(require('./src/components/Character1.vue'));
        
    },'character');
    
};
const Character2 = resolve => {
    require.ensure(['./src/components/Character2.vue'], () => {
        resolve(require('./src/components/Character2.vue'));
        
    },'character');
    
};
const Character3 = resolve => {
    require.ensure(['./src/components/Character3.vue'], () => {
        resolve(require('./src/components/Character3.vue'));
        
    },'character');
    
};
const Character4 = resolve => {
    require.ensure(['./src/components/Character4.vue'], () => {
        resolve(require('./src/components/Character4.vue'));
        
    },'character');
    
};
const Character5 = resolve => {
    require.ensure(['./src/components/Character5.vue'], () => {
        resolve(require('./src/components/Character5.vue'));
        
    },'character');
    
};
const Character6 = resolve => {
    require.ensure(['./src/components/Character6.vue'], () => {
        resolve(require('./src/components/Character6.vue'));
        
    },'character');
    
};
export const routes =[
        {path:'/home',component:Home,props:true},
        {path:'/about',component:About},
        {path:'/features',component:Features},
        {path:'/media',component:Media},
        {path:'/download',component:Download},
        {path:'/contact',component:Contact},
         {path:'/', name:'body',component:Body,props:true},
        {path:'/character1',component:Character1,props:true},
         {path:'/character2',component:Character2,props:true},
          {path:'/character3',component:Character3,props:true},
          {path:'/character4',component:Character4,props:true},
          {path:'/character5',component:Character5,props:true},
           {path:'/character6',component:Character6,props:true},
           {path:'*',redirect:'/' }
           
          
          // {path:'/share',component:ShareModal}
        
        
        

];



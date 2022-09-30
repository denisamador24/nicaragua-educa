const fbGraph = 'https://graph.facebook.com/'

const toked = 'EAAVEmsBM9q8BAOnvnZBr2IegKuNUsVWF2wZAyzjfpzTeacxLCfZBeyIRmJITZBZBT08NWuKJK1JO4GYAoWKeWJdhkFXpAqNiXownXv9ZBuJUirhZCbRiHDokeIaweoriBTLU4UZBquZCp86m12W8xpMJ9oqZA6lXvAK3l3llZBZAWCh82hk8tepb1T5xipZCzeShHMpPbQfos9J0MtgZDZD';

const API_AX = axios.create({
  baseURL: fbGraph
});

async function getPost (){
 /* FB.api(
  '/100063559424331',
  'GET',
  {"fields":"id,name",
    "access_token": "EAAVEmsBM9q8BAOnvnZBr2IegKuNUsVWF2wZAyzjfpzTeacxLCfZBeyIRmJITZBZBT08NWuKJK1JO4GYAoWKeWJdhkFXpAqNiXownXv9ZBuJUirhZCbRiHDokeIaweoriBTLU4UZBquZCp86m12W8xpMJ9oqZA6lXvAK3l3llZBZAWCh82hk8tepb1T5xipZCzeShHMpPbQfos9J0MtgZDZD",
  },
  function(response) {
      // Insert your code here
      console.log(response);
  }
);
*/

/*
 const response = await fetch(fbGraph+'me?access_token='+toked);
  const data = await response.json();
  console.log(data);
  
 const s= {"fields":"id,name,website,video_upload_limits,posts.limit(10),videos", "access_token":"EAAVEmsBM9q8BAOnvnZBr2IegKuNUsVWF2wZAyzjfpzTeacxLCfZBeyIRmJITZBZBT08NWuKJK1JO4GYAoWKeWJdhkFXpAqNiXownXv9ZBuJUirhZCbRiHDokeIaweoriBTLU4UZBquZCp86m12W8xpMJ9oqZA6lXvAK3l3llZBZAWCh82hk8tepb1T5xipZCzeShHMpPbQfos9J0MtgZDZD"};
*/

const {data} = await API_AX.post('100063559424331', {
      
      access_token: toked,
      "fields":"id,name,website,video_upload_limits,posts.limit(10),videos"
    });
    console.log(data);
}

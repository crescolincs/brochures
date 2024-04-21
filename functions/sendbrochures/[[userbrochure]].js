export async function onRequest(context) {
  // get the user and the brochure from the dynamic url  
     var airtablejson =`{
       "fields": {
        "who": ["${context.params.userbrochure[0]}"], 
        "brochure": "${context.params.userbrochure[1]}"
      }
    }`
     // write to airtable table [brochures-downloaded] the [user] has requested the [brochure]
    const airtableresponse = await fetch(`https://api.airtable.com/v0/appTDInc67J2LFy2g/tblXWXccP64yQR9iv`, {
    method: 'POST',
    body: airtablejson,
    headers: {
       'Authorization': 'Bearer '+context.env.AT_TKN,
       'Content-Type': 'application/json',
       'X-Requested-With': 'XMLHttpRequest', 
      }    
    })
    const airtableJSON = await airtableresponse.json()
    //console.log("airtableJSON : "+JSON.stringify(airtableJSON))
    // ridirect to the brochure pdf
    return Response.redirect('https://brochures.pages.dev/brochures/'+context.params.userbrochure[1]+'-brochure.pdf');
  }

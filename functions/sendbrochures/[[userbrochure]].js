export function onRequest(context) {
// get the user and the brochure from the dynamic url

// inform airtable the [user] has requested the [brochure]

// ridirect to the brochure pdf
    return Response.redirect('https://brochures.pages.dev/brochures/'+context.params.userbrochure[1]+'-brochure.pdf');
  }

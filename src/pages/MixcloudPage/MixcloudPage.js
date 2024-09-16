import "./MixcloudPage.css"

fetch('https://geschoss-sons-of-horus-59e6.twc1.net/mixcloud/releases')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
	
export const MixcloudPage = () => (

	
	<>
	</>
	
);
import React, {Component} from 'react'
import './new-home-component.css'
import {Link} from "react-router-dom";
import axios from 'axios'
import {SERVER_ROOT} from "../../constants";


export default class NewHomeComponent extends Component {
    state = {
        isLoading: true,
        place: null,
        error: null,
        searchText: '',
    }

    handleSearchTextChange(e) {
        this.setState({
            searchText: e.target.value
        })
    }


    constructor(props) {
        super(props)

        this.handleSearch = this.handleSearch.bind(this)
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this)
    }

    async handleSearch(e){
        e.preventDefault()

        const { searchText } = this.state
        const response = await axios(`${SERVER_ROOT}/search/${searchText}`);
        this.setState({
            place: response.data
        })
    }

    render() {
        const {isLoading, users, error, place, searchText} = this.state;
        return <div className="wrapper">

            {place?<div>

                Place loaded: {place.name}
                Capital City: {place.capital}
                Place Location: {place.location}


            </div>:<div>
                <form onSubmit={this.handleSearch}>
                    <input
                        onChange={this.handleSearchTextChange}
                        type={'text'}
                        name={'search'}
                        placeholder={'Enter place name...'}
                        value={searchText}
                    />
                </form>
            </div>}
                <strong>Welcome to Trip Guide</strong>

             <h1>Colorado</h1>
             <h2>Cities in Colorado</h2>
             <h3>Take a tour to colorado.. </h3>
             <h4>Travel Destination Colorado</h4>
             <h5>Famous Hotel and restaurants in colorado</h5>
             <h6>Hiking and Rafting in Colorado</h6>


            <div class="cities">
            <h2>IMPORTANT INFORMATION OF THE PLACES</h2>
        <p>FAMOUS TOURISM DESTINATION.</p>
        <p> HIKING AND RAFTING </p>
    <p>RESTAURANTS AND BARS</p>
    <p>SHARE AND LIKE US ON FACEBOOK</p>

    </div>
        </div>


/*
// </body>
// </html>*/

        {/*<ChordEditor/>*/}

        /*users.map(user => {
        //     const { username, name, email } = user;
        //
        //         <div key={username}>
        //             <p>Name: {name}</p>
        //             <p>Email Address: {email}</p>
        //             <hr />
        //         </div>
        // ) :
        // (
        <h3>  <div className="col-sm">
            <strong>Find the search!</strong>
            <br />
            <Link to={"/new home component"}>
                <button type="button" className="btn btn-primary btn-lg">
                    Places of Interest
                </button>
            </Link>
        {/*</div></h3>
        {/*)}*/


    }
}

/*fetchUsers() {
//   // Where we're fetching data from
//   fetch(`http://localhost:4002/ticketType`)
//     // We get the API response and receive data in JSON format...
//     .then(response => response.json())
//     // ...then we update the users state
//     .then(data =>
//       this.setState({
//         users: data,
//         isLoading: false,
//       })
//     )
//     // Catch any errors we hit and update the app
//     .catch(error => this.setState({ error, isLoading: false }));
// }

//componentDidMount() {
//   this.fetchUsers();
// }


            //<header>






//class App extends React.Component {
//   // State will apply to the posts object which is set to loading by default
//   state = {
//     posts: [],
//     isLoading: true,
//     errors: null
//   };
//   // Now we're going to make a request for data using axios
//   getPosts() {
//     axios
//       // This is where the data is hosted
//       .get("https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/posts.json")
//       // Once we get a response and store data, let's change the loading state
//       .then(response => {
//         this.setState({
//           posts: response.data.posts,
//           isLoading: false
//         });
//       })
//       // If we catch any errors connecting, let's update accordingly
//       .catch(error => this.setState({ error, isLoading: false }));
//   }
//   // Let's our app know we're ready to render the data
//   componentDidMount() {
//     this.getPosts();
//   }
//   // Putting that data to use
//   render() {
//     const { isLoading, posts } = this.state;
//     return (
//       <React.Fragment>
//         <h2>Random Post</h2>
//         <div>
//           {!isLoading ? (
//             posts.map(post => {
//               const { _id, title, content } = post;
//               return (
//                 <div key={_id}>
//                   <h2>{title}</h2>
//                   <p>{content}</p>
//                   <hr />
//                 </div>
//               );
//             })
//           ) : (
//             <p>Loading...</p>
//           )}
//         </div>
//       </React.Fragment>
//     );
//   }
// }
*/

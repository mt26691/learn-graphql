import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
// import query from '../queries/fetchSongs';

class SongList extends Component {

	onSongDelete(id) {

	}

	renderSongs() {
		return this.props.data.songs.map(({ id, title }) => {
			return (
				<li key={id} className="collection-item">
					<Link to={`/songs/${id}`}>
						{title}
					</Link>
					<i
						className="material-icons"
						onClick={() => this.onSongDelete(id)}
					>
						delete
          </i>
				</li>
			);
		});
	}

	render() {
		if (this.props.data.loading) { return <div>Loading...</div>; }

		return (
			<div>
				<ul className="collection">
					{this.renderSongs()}
				</ul>
				<Link
					to="/songs/new"
					className="btn-floating btn-large red right"
				>
					<i className="material-icons">add</i>
				</Link>
			</div>
		);
	}
}


const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

// const mutation = gql`
//   mutation DeleteSong($id: ID) {
//     deleteSong(id: $id) {
//       id
//     }
//   }
// `;

export default graphql(query)(SongList);

// export default graphql(mutation)(
//   graphql(query)(SongList)
// );

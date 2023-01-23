import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import axios from 'axios';

export default class PostList extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:3001/admin/api/resources/posts/actions/list?direction=desc&sortBy=id`).then((res) => {
      const posts = res.data.records;
      this.setState({ posts });
    });
  }

  generatePost(record) {
    const date = new Date(record.params.cardHeaderSub);
    return (
      <Card>
        <CardHeader title={record.params.cardHeaderTitle} subheader={date.toLocaleDateString()} />
        <CardContent>
          <div dangerouslySetInnerHTML={{ __html: record.params.cardContent }} />
        </CardContent>
      </Card>
    );
  }

  render() {
    return (
      <>
        {this.state.posts.map((post) => (
          <>{this.generatePost(post)}</>
        ))}
      </>
    );
  }
}

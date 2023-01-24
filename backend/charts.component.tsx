import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';


export default class BarChartComponent extends React.Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/admin/api/resources/posts/actions/list?direction=desc&sortBy=id`).then((res) => {
      const posts = res.data.records;
      this.setState({ posts });
    });
  }

  generateChart() {
    const convertDate = (date) => {
      const DateObject = new Date(date)
      return DateObject.toLocaleDateString()
    }
    const data = this.state.posts.map((post) => (
      { name: convertDate(post.params.cardHeaderSub),
        wc: post.params.cardContent.split(" ").length 
      }
    ))

    return (
    <ResponsiveContainer width="33%" height="40%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="wc" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    )
  }

  render() {
    return (
      <>
      {this.generateChart()}
      </>
    )
  }

}
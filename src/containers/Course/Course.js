import React, {Component} from 'react';

class Course extends Component {

    componentDidMount() {
        console.log("hohoho1", this.props);
    }

    componentDidUpdate() {
        console.log("hohoho2", this.props);
    }

    render() {

        // const course = this.state.courses.find(i => {
        //
        //     if (i.id === +this.props.match.params.id) {
        //         console.log(typeof i.title);
        //         return i;
        //     }
        // });
        return (
            <div>
                <h1>hohohoho</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>

        );
    }
}

export default Course;

import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { setDurations } from '../actions';

class TimeRow extends Component {
  componentDidMount(){
    this.createDurations();
  }

  createDurations(){
    const durations = [];
    let h = 8;
    let m1,m2,h2,tstart,tend;
    for(let i=1;i<=15;i++){
      //format hhmm string
      m1 = i%2===0? '30':'00';
      tstart= h<10?`0${h}${m1}`:`${h}${m1}`;

      m2 = m1==='00'? '30':'00';
      h2 = m1==='30'? h+1:h;
      tend = h2<10?`0${h2}${m2}`:`${h2}${m2}`;

      if(i%2===0)h++;

      durations.push({
        start:tstart,
        end:tend
      });
    }
    this.props.setDurations(durations);
  }

  renderColumn(){
    return this.props.durations.map(duration => <div className="column" key={duration.start}>{`${duration.start}-${duration.end}`}</div>)
  }

  render(){
    // console.log(this.props.durations);
    return (
      <div className="sixteen column row">
        <div className="column">2/61</div>
        {this.renderColumn()}
      </div>
    );
  }
}

const mapStateToProps = ({ durations }) => {
  return { durations };
}

export default connect(mapStateToProps,{setDurations})(TimeRow);

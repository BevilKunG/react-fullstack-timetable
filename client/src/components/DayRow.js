import React,{ Component } from 'react';

class DayRow extends Component {

  gridSizeStyle(gridUse){
    switch(gridUse){
      case 1: return 'one';
      case 2: return 'two';
      case 3: return 'three';
      case 4: return 'four';
      case 5: return 'five';
      case 6: return 'six';
      case 7: return 'seven';
      case 8: return 'eight';
      case 9: return 'nine';
      case 10: return 'ten';
      case 11: return 'eleven';
      case 12: return 'twelve';
      case 13: return 'thirteen';
      case 14: return 'fourteen';
      case 15: return 'fifteen';
      case 16: return 'sixteen';
      case 17: return 17;
      case 18: return 18;
      case 19: return 19;
      case 20: return 20;
      case 21: return 21;
      case 22: return 22;
      case 23: return 23;
      case 24: return 24;
      case 25: return 25;
      default: return '';
    }
  }

  renderColumn(){
    let currentDuration = '0800';
    return this.props.courses.map(course => {
      //calculate grid size of course
      let gridUse=0;
      let hstart = parseInt(course.timeStart.split('').splice(0,2).join(''));
      let mstart = parseInt(course.timeStart.split('').splice(2,2).join(''));
      let hend = parseInt(course.timeEnd.split('').splice(0,2).join(''));
      let mend = parseInt(course.timeEnd.split('').splice(2,2).join(''));
      if(hend>hstart){
          gridUse+=(hend-hstart)*2;
      }
      if(mend!==mstart) gridUse+= mend>mstart? 1:-1;
      const gridSize = this.gridSizeStyle(gridUse);

      //calculate grid size of space
       gridUse=0;
      let hcd = parseInt(currentDuration.split('').splice(0,2).join(''));
      let mcd = parseInt(currentDuration.split('').splice(2,2).join(''));
      if(hstart>hcd){
        gridUse+=(hstart-hcd)*2;
      }
      if(mcd!==mstart) gridUse+= mstart>mcd? 1:-1;
      const gridSpace = this.gridSizeStyle(gridUse);
      currentDuration=course.timeEnd;
      const loopedDiv = [];
      for(let i=1;i<=gridSpace;i++){
        loopedDiv.push(<div className="one wide column"></div>);
      }
      return (
        <>
        {gridSpace!==''&& typeof gridSpace === 'string'?<div className={`${gridSpace} wide column`}></div>:null}
        {typeof gridSpace === 'number'?loopedDiv:null}
          <div className={`center aligned ${gridSize} wide column`}  key={course._id} style={{backgroundColor:course.color}}>
              <div>
                <h3>{course.name.toUpperCase()}</h3>
                <h5>{course.place.toUpperCase()}</h5>
              </div>
          </div>
        </>
      );
    });
  }

  render(){
    // console.log(this.props);
    if(this.props.courses.length === 0) return null;
    return (
      <div className="row">
        <div className="center aligned black column">{this.props.day.split('').splice(0,3).join('').toUpperCase()}</div>
        {this.renderColumn()}
      </div>
    );
  }

}

export default DayRow;

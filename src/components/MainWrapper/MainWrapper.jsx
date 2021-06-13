import React from 'react'
import s from "./MainWrapper.module.css"
import CleanContent from "./Templates/CleanContent/CleanContent";
import ZeroStageContainer from "./ZeroStage/ZeroStageContainer";
import FourthStageContainer from "./FourthStage/FourthStageContainer";
import ThirdStageContainer from "./ThirdStage/ThirdStageContainer";
import axios from "axios";

class MainWrapper extends React.Component {

    componentDidMount() {
        // let checkStatus = () => {

            // axios.get("http://localhost:5000/state").then(response => {
            //     this.props.setGeneralStageNumber(response.data.state_no)
                // if (response.data[0] === 1 && this.props.endoStars.generalStageNumber !== 1){
                //     this.props.setGeneralStageNumber(1)
                //     console.log("echo)")
                // }
            // })

        // }
        // setInterval(checkStatus, 1000)
    }

    render() {
        // let stageComponent;
        // switch (this.props.stageNumber) {
        //     case 0:
        //         stageComponent = <ZeroStageContainer/>
        //         break
        //     case 1:
        //         stageComponent = <FirstStageContainer />
        //         break
        //     case 2:
        //         stageComponent = <SecondStageContainer />
        //         break
        //     case 3:
        //         stageComponent = <ThirdStageContainer />
        //         break;
        //     case 4:
        //         stageComponent = <FourthStageContainer />
        //         break;
        //     default:
        //         stageComponent = <div>Stage number {this.props.stageNumber}</div>
        //         break
        // }
        // console.log(this.props.endoStars)
        let buttonsHolder

        if (this.props.endoStars.generalStageNumber !== 1) {
            buttonsHolder = <div></div>
        } else {
            if (this.props.endoStars.stageNumber === 0) {
                buttonsHolder =
                    <div className={s.buttons}>
                        <button onClick={this.props.nextStage} className={s.sendButton}>Продолжить</button>
                        {/*<button onClick={this.props.previousStage} className={s.backButton}>Назад</button>*/}
                        <button onClick={this.props.cancelWork} className={s.cancelButton}>Отмена</button>
                    </div>
            } else if (this.props.endoStars.stageNumber === 14) {
                buttonsHolder =
                    <div className={s.buttons}>
                        <button onClick={this.props.nextGeneralStage} className={s.sendButton}>Завершить сборку</button>
                        {/*<button onClick={this.props.previousStage} className={s.backButton}>Назад</button>*/}
                        {/*<button onClick={this.props.cancelWork} className={s.cancelButton}>Отмена</button>*/}
                    </div>
            } else {
                buttonsHolder =
                    <div className={s.buttons}>
                        <button onClick={this.props.nextStage} className={s.sendButton}>Продолжить</button>
                        {/*<button onClick={this.props.previousStage} className={s.backButton}>Назад</button>*/}
                        {/*<button onClick={this.props.cancelWork} className={s.cancelButton}>Отмена</button>*/}
                    </div>
            }
        }

        let wrapperContent
        switch (this.props.endoStars.generalStageNumber) {
            case 0:
                wrapperContent = <ZeroStageContainer/>
                break
            case 1:
                wrapperContent =
                    <div>
                        <CleanContent
                            useImg={this.props.endoStars.productionStages.useImg[this.props.endoStars.stageNumber]}
                            imgUrl={this.props.endoStars.productionStages.imgUrls[this.props.endoStars.stageNumber]}
                            stageDescription={this.props.endoStars.productionStages.stageDescription[this.props.endoStars.stageNumber]}
                            stageIdealDuration={this.props.endoStars.productionStages.stageIdealDuration[this.props.endoStars.stageNumber]}
                            startTime={this.props.endoStars.productionStages.stageStartTime[this.props.endoStars.stageNumber]}
                            endTime={this.props.endoStars.productionStages.stageEndTime[this.props.endoStars.stageNumber]}
                            stageNumber={this.props.endoStars.stageNumber}
                            setStageStartTime={this.props.setStageStartTime}
                            countStageDuration={this.props.countStageDuration}
                            stageDuration={this.props.endoStars.productionStages.stageDuration[this.props.endoStars.stageNumber]}
                        />
                    </div>
                break
            case 2:
                wrapperContent = <ThirdStageContainer/>
                break
            case 3:
                wrapperContent = <FourthStageContainer/>
                break
            default:
                wrapperContent = <ZeroStageContainer/>
                break
        }
        return (
            <div className={s.wrapper}>
                {wrapperContent}
                {buttonsHolder}
            </div>
        )
    }
}

export default MainWrapper
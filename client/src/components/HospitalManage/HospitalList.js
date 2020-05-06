import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";

class HospitalList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            responseSwtoolList: '',//swtool 리스트 response 변수
            append_SwtoolList: '', //swtool 리스트 append 변수
        }
    }

    componentDidMount() {
        // SW Tool 리스트 호출
        this.callSwToolListApi()
    }

    // SW Tool 리스트 호출
    callSwToolListApi = async () => {
        //SW Tool List 호출
        axios.post('/api/Hospital?type=list', {
        })
        .then( response => {
            try {
                this.setState({ responseSwtoolList: response });
                this.setState({ append_SwtoolList: this.SwToolListAppend() });
            } catch (error) {
                alert('작업중 오류가 발생하였습니다.'+error);
            }
        })
        .catch( error => {alert('작업중 오류가 발생하였습니다.'+error);return false;} );
    }

    // SW Tool 리스트 append
    SwToolListAppend = () => {
        let result = []
        var SwToolList = this.state.responseSwtoolList.data
        
        for(let i=0; i<SwToolList.json.length; i++){
            var data = SwToolList.json[i]

            result.push(
                <tr class="hidden_type">
                    <td>{data.hosname}</td>
                    <td>{data.starttime}</td>
                    <td>{data.endtime}</td>
                    <td>{data.joinflag}</td>
                </tr>
            )
        }
        return result
    }

    render () {
        return (
            <section class="sub_wrap" >
                <article class="s_cnt mp_pro_li ct1 mp_pro_li_admin">
                    <div class="li_top">
                        <h2 class="s_tit1">Software Tools 목록</h2>
                        <div class="li_top_sch af">
                        <Link to={'/AdminSoftwareView/register'} className="sch_bt2 wi_au">Tool 등록</Link>
                        </div>
                    </div>

                    <div class="list_cont list_cont_admin">
                        <table class="table_ty1 ad_tlist">
                            <tr>
                                <th>병원이름</th>
                                <th>운영시작시간</th>
                                <th>운영종료시간</th>
                                <th>승인여부</th>
                            </tr>
                        </table>	
                        <table class="table_ty2 ad_tlist">
                            {this.state.append_SwtoolList}
                        </table>
                    </div>
                </article>
            </section>
        );
    }
}

export default HospitalList;
import React from 'react';

const Gnb = () => (
    <nav id="gnb" className="">
        <div className="nav-bg"></div>
        <ul className="nav-depth1">
            <li>
                <a href="#">접수/배차</a>
                <ul className="nav-depth2">
                    <li><a href="#">접수</a></li>
                    <li><a href="#">콜 현황</a></li>
                    <li><a href="#">예약콜 현황</a></li>
                    <li><a href="#">콜 검색</a></li>
                    <li><a href="#">심야콜 접수</a></li>
                </ul>
            </li>
            <li>
                <a href="#">정보관리</a>
                <ul className="nav-depth2">
                    <li>
                        <a href="#" className="ico-plus">사용자</a>
                        <ul className="nav-depth3">
                            <li><a href="#">사용자관리</a></li>
                            <li><a href="#">회원사관리</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className="ico-plus">고객</a>
                        <ul className="nav-depth3">
                            <li><a href="#">고객관리</a></li>
                            <li><a href="#">홈페이지  가입 고객 관리</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className="ico-plus">기사</a>
                        <ul className="nav-depth3">
                            <li><a href="#">기사관리</a></li>
                            <li><a href="#">운전원근무조관리</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className="ico-plus">차량</a>
                        <ul className="nav-depth3">
                            <li><a href="#">차량관리</a></li>
                            <li><a href="#">차량현황</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">메시지</a>
                <ul className="nav-depth2">
                    <li><a href="#">공지사항</a></li>
                    <li><a href="#">SMS 문구관리</a></li>
                    <li><a href="#">SMS 대량전송</a></li>
                    <li><a href="#">SMS 정산</a></li>
                </ul>
            </li>
            <li>
                <a href="#">통계</a>
                <ul className="nav-depth2">
                    <li><a href="#">일자별 통계</a></li>
                    <li><a href="#">사용자별 현황</a></li>
                    <li><a href="#">구분별 현황</a></li>
                    <li><a href="#">지역별 현황</a></li>
                    <li><a href="#">장애종류별 현황</a></li>
                    <li><a href="#">장애등급별 현황</a></li>
                    <li><a href="#">이용목적별 현황</a></li>
                    <li><a href="#">시간대별 현황</a></li>
                    <li><a href="#">연령별 현황</a></li>
                    <li><a href="#">유형별 현황</a></li>
                    <li><a href="#">차량별 주행거리 현황</a></li>
                    <li><a href="#">리터당 수입금</a></li>
                    <li><a href="#">현황</a></li>
                    <li><a href="#">수입금 현황</a></li>
                </ul>
            </li>
            <li>
                <a href="#">보고서</a>
                <ul className="nav-depth2">
                    <li>
                        <a href="#" className="ico-plus">보고</a>
                        <ul className="nav-depth3">
                            <li><a href="#">일/주/월 보고</a></li>
                            <li><a href="#">추진실적</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className="ico-plus">수입금일지</a>
                        <ul className="nav-depth3">
                            <li><a href="#">수입내역 결산서</a></li>
                            <li><a href="#">일 수입 집계표</a></li>
                            <li><a href="#">년 수입 집계표</a></li>
                            <li><a href="#">기간별 수입 집계표</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className="ico-plus">결의서</a>
                        <ul className="nav-depth3">
                            <li><a href="#">징수결의서</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">운행일지</a>
                <ul className="nav-depth2">
                    <li><a href="#">차량운행일지</a></li>
                </ul>
            </li>
            <li>
                <a href="#">기초정보관리</a>
                <ul className="nav-depth2">
                    <li><a href="#">환경설정</a></li>
                    <li><a href="#">CID설정</a></li>
                    <li><a href="#">사용자설정</a></li>
                </ul>
            </li>
            <li>
                <a href="#">시스템설정</a>
                <ul className="nav-depth2">
                    <li><a href="#">공통코드 관리</a></li>
                    <li>
                        <a href="#" className="ico-plus">권한관리</a>
                        <ul className="nav-depth3">
                            <li><a href="#">시스템메뉴 관리</a></li>
                            <li><a href="#">권한 그룹별 메뉴관리</a></li>
                            <li><a href="#">사용자별 메뉴관리</a></li>
                        </ul>
                    </li>
                    <li><a href="#">시스템환경 설정</a></li>
                </ul>
            </li>
            <li>
                <a href="#">로그인</a>
                <ul className="nav-depth2">
                    <li><a href="#">비밀번호변경</a></li>
                    <li><a href="#">로그아웃</a></li>
                    <li><a href="#">프로그램정보</a></li>
                </ul>
            </li>
        </ul>
    </nav>
    
)

export default Gnb;
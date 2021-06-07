import React from "react";

const Gnb = () => (
    <nav id="gnb" className="">
        <div className="nav-bg"></div>
        <ul className="nav-depth1">
            <li>
                <a href="./s1">접수/배차</a>
                <ul className="nav-depth2">
                    <li>
                        <a href="./s1010">접수</a>
                    </li>
                    <li>
                        <a href="./s1020">콜 현황</a>
                    </li>
                    <li>
                        <a href="./s1030">예약콜 현황</a>
                    </li>
                    <li>
                        <a href="./s1040">콜 검색</a>
                    </li>
                    <li>
                        <a href="./s1050">심야콜 접수</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="./s2">정보관리</a>
                <ul className="nav-depth2">
                    <li>
                        <a href="./s2010">위치정보관리</a>
                    </li>
                    <li>
                        <a href="./s2020" className="ico-plus">
                            사용자
                        </a>
                        <ul className="nav-depth3">
                            <li>
                                <a href="./s2020">사용자관리</a>
                            </li>
                            <li>
                                <a href="./s2030">회원사관리</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="./s2040" className="ico-plus">
                            고객
                        </a>
                        <ul className="nav-depth3">
                            <li>
                                <a href="./s2040">고객관리</a>
                            </li>
                            <li>
                                <a href="./s2050">홈페이지 가입 고객 관리</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="./s2060" className="ico-plus">
                            기사
                        </a>
                        <ul className="nav-depth3">
                            <li>
                                <a href="./s2060">기사관리</a>
                            </li>
                            <li>
                                <a href="./s2070">운전원근무조관리</a>
                            </li>
                            <li>
                                <a href="./s2080">출퇴근 관리</a>
                            </li>
                            <li>
                                <a href="./s2090">기사현황</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="./s2100" className="ico-plus">
                            차량
                        </a>
                        <ul className="nav-depth3">
                            <li>
                                <a href="./s2100">차량관리</a>
                            </li>
                            <li>
                                <a href="./s2110">차량현황</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a href="./s3">메시지</a>
                <ul className="nav-depth2">
                    <li>
                        <a href="./s3010">공지사항</a>
                    </li>
                    <li>
                        <a href="./s3020">SMS 문구관리</a>
                    </li>
                    <li>
                        <a href="./s3030">SMS 대량전송</a>
                    </li>
                    <li>
                        <a href="./s3040">SMS 정산</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="./s4">통계</a>
                <ul className="nav-depth2">
                    <li>
                        <a href="./s4010">일자별 통계</a>
                    </li>
                    <li>
                        <a href="./s4020">사용자별 현황</a>
                    </li>
                    <li>
                        <a href="./s4030">구분별 현황</a>
                    </li>
                    <li>
                        <a href="./s4040">지역별 현황</a>
                    </li>
                    <li>
                        <a href="./s4050">장애종류별 현황</a>
                    </li>
                    <li>
                        <a href="./s4060">장애등급별 현황</a>
                    </li>
                    <li>
                        <a href="./s4070">이용목적별 현황</a>
                    </li>
                    <li>
                        <a href="./s4080">시간대별 현황</a>
                    </li>
                    <li>
                        <a href="./s4090">연령별 현황</a>
                    </li>
                    <li>
                        <a href="./s4010">유형별 현황</a>
                    </li>
                    <li>
                        <a href="./s4110">차량별 주행거리 현황</a>
                    </li>
                    <li>
                        <a href="./s4120">리터당 수입금</a>
                    </li>
                    <li>
                        <a href="./s4130">현황</a>
                    </li>
                    <li>
                        <a href="./s4140">수입금 현황</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="./s5">보고서</a>
                <ul className="nav-depth2">
                    <li>
                        <a href="./s5010" className="ico-plus">
                            보고
                        </a>
                        <ul className="nav-depth3">
                            <li>
                                <a href="./s5010">일/주/월 보고</a>
                            </li>
                            <li>
                                <a href="./s5020">추진실적</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="./s5030" className="ico-plus">
                            수입금일지
                        </a>
                        <ul className="nav-depth3">
                            <li>
                                <a href="./s5030">수입내역 결산서</a>
                            </li>
                            <li>
                                <a href="./s5040">일 수입 집계표</a>
                            </li>
                            <li>
                                <a href="./s5050">년 수입 집계표</a>
                            </li>
                            <li>
                                <a href="./s5060">기간별 수입 집계표</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="./s5070" className="ico-plus">
                            결의서
                        </a>
                        <ul className="nav-depth3">
                            <li>
                                <a href="./s5070">징수결의서</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a href="./s6">운행일지</a>
                <ul className="nav-depth2">
                    <li>
                        <a href="./s6">차량운행일지</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="./s7">기초정보관리</a>
                <ul className="nav-depth2">
                    <li>
                        <a href="./s7010">환경설정</a>
                    </li>
                    <li>
                        <a href="./s7020">CID설정</a>
                    </li>
                    <li>
                        <a href="./s7030">사용자설정</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="./s8">시스템설정</a>
                <ul className="nav-depth2">
                    <li>
                        <a href="./s8010">공통코드 관리</a>
                    </li>
                    <li>
                        <a href="./s8020" className="ico-plus">
                            권한관리
                        </a>
                        <ul className="nav-depth3">
                            <li>
                                <a href="./s8020">시스템메뉴 관리</a>
                            </li>
                            <li>
                                <a href="./s8030">권한 그룹별 메뉴관리</a>
                            </li>
                            <li>
                                <a href="./s8040">사용자별 메뉴관리</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="./s8050">시스템환경 설정</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="./s9">로그인</a>
                <ul className="nav-depth2">
                    <li>
                        <a href="./s9010">비밀번호변경</a>
                    </li>
                    <li>
                        <a href="./s9020">로그아웃</a>
                    </li>
                    <li>
                        <a href="./s9030">프로그램정보</a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
);

export default Gnb;

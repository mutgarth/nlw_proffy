import React from 'react';

import './styles.css'
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem'
import TeacherForm from '../TeacherForm';
import Input from '../../components/Input';




function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">

                    <Input name ="subject" label="Matéria"/>
                    <Input name ="week_day" label="Dia da semana"/>
                    <Input type="time" name ="time" label="Hora"/>

                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />

            </main>
        </div>
    )
}

export default TeacherList;
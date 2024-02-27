import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCourses } from '../../Redux/Slices/CourseSlice';
import HomeLayout from '../../Layouts/HomeLayout';

function CourseList() {
    const dispatch = useDispatch();

    const {courseData} = useSelector((state) => state.course);

    function loadCourses(){
         dispatch(getAllCourses());
    }

    useEffect(()=>{
        loadCourses(); 
    },[]);
  return (
    <HomeLayout>
        <div className='min-h-[90vh] pt-12 pl-20 flex flex-col gap-10 text-white'>
            <h1>
                Explore the courses made by 
                <span className='font-bold text-yellow-500'>
                    Industry experts
                </span>
                <div className='mb-10 flex flex-wrap gap-14'>

                </div>
            </h1>
        </div>
    </HomeLayout>
  )
}

export default CourseList

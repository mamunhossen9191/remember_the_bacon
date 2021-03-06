import React from 'react';
import TaskNav from './task_nav';
import {
  fetchTaskIndex,
  fetchTask,
  CreateTask,
  updateTask,
  deleteTask,
  deleteAllSelectedTask
} from '../../actions/task_actions';
import {
  fetchList,
} from '../../actions/list_actions';
import { switchTab } from '../../actions/ui_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ entities, ui }) => {
  const { tasks, selectedTaskIds } = entities;
  const { showCompleted } = ui;
  return {
    tasks: Object.values(tasks),
    selectedTaskIds,
    showCompleted,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTaskIndex: () => dispatch(fetchTaskIndex()),
    fetchTask: (id) => dispatch(fetchTask(id)),
    CreateTask: (task) => dispatch(CreateTask(task)),
    updateTask: (task) => dispatch(updateTask(task)),
    deleteTask: (id) => dispatch(deleteTask(id)),
    deleteAllSelectedTask: () => dispatch(deleteAllSelectedTask()),
    switchTab: (showCompleted) => dispatch(switchTab(showCompleted)),
    fetchList: (id) => dispatch(fetchList(id)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskNav));

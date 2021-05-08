import React from "react";
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import {Users} from "./Users";

export class UsersAPIComponent extends React.Component<UsersPropsType, UsersPropsType> {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUserCount(response.data.items);
        })
    }

    // onPageChanged = (page: number) => {
    //     this.props.setCurrentPage(page);
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
    //         .then(response => {
    //                 this.props.setUsers(response.data.items);
    //             }
    //         );
    // }

    render() {

        return (
          <Users
              usersPage={this.props.usersPage}
              pageSize={this.props.pageSize}
              totalUsersCount={this.props.totalUsersCount}
              currentPage={this.props.currentPage}
              follow={this.props.follow}
              unFollow={this.props.unFollow}
              setUsers={this.props.setUsers}
              setCurrentPage={this.props.setCurrentPage}
              setTotalUserCount={this.props.setTotalUserCount}
              />
        )
    }


}

import axios from 'axios'
import { UserRecord } from '../types/user_record';
import { SearchService } from '../service/search_service' 
import { PostWithComments } from '../types/comment_post';

export class ReportService{
    
    constructor(private SearchService: SearchService){}

    async createReport(userId: number): Promise<UserRecord>{ 
        const report = await Promise.all([
            this.SearchService.getUser(userId),
            this.SearchService.getUserPosts(userId),
        ])
        const comments = await Promise.all(report[1].map(Posts => this.SearchService.getPostComments(Posts.id)))
        const postsWithComments = report[1].map((post, i) => ({
            post: post,
            comentary: comments[i],
        }))
        const totalComments = comments.reduce((soma, arr) => soma + arr.length, 0);
        return ({ user: report[0] , posts: postsWithComments, totalComentaries: totalComments});
    }

    async exihibitReport(userId: number){
        const { user , posts, totalComentaries } = await this.createReport(userId)
        console.log(`Usuários: ` + JSON.stringify(user, null, 2));
        console.log("Posts: " + JSON.stringify(posts, null, 2));
        console.log(`Total de Comentários: ${totalComentaries}`);
    }
}
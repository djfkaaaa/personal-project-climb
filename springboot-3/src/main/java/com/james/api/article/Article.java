package com.james.api.article;

import com.james.api.board.Board;
import com.james.api.user.User;
import jakarta.jws.soap.SOAPBinding;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity(name = "articles")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@ToString(exclude = {"id"})

public class Article {
    @Id
    @Column(name = "article_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "article")
    private List<Board> board;


    private String title;
    private String content;
    private Long writer;
    private String registerDate;


    @Builder(builderMethodName = "builder")
    public Article(Long id,String title, String content, Long writer , String registerDate) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.writer = writer;
        this.registerDate = registerDate;
    }
}
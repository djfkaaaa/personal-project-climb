package com.james.api.article;

import java.sql.SQLException;
import java.util.List;

public interface ArticleService {
    List<?> findUsers() throws SQLException;
}

package com.sqlDocumentation.api.persistence.repository;

import com.sqlDocumentation.api.persistence.model.InfoObjct;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InfoObjtsCrudRepository extends CrudRepository<InfoObjct, Integer> {

    @Query(value = "SELECT * FROM clauses WHERE obj = :clause",nativeQuery = true)
    InfoObjct getClauseByNameClause(@Param("clause")String clause);

    @Query(value = "SELECT obj FROM clauses", nativeQuery = true)
    List<String> getAllCLauses();
}
